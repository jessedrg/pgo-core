import { Test } from "@nestjs/testing";
import { INestApplication, HttpStatus, ExecutionContext } from "@nestjs/common";
import request from "supertest";
import { MorganModule } from "nest-morgan";
import { ACGuard } from "nest-access-control";
import { DefaultAuthGuard } from "../../auth/defaultAuth.guard";
import { ACLModule } from "../../auth/acl.module";
import { ShipmentController } from "../shipment.controller";
import { ShipmentService } from "../shipment.service";

const nonExistingId = "nonExistingId";
const existingId = "existingId";
const CREATE_INPUT = {
  courier: "exampleCourier",
  createdAt: new Date(),
  declaredValues: 42.42,
  delayedAt: new Date(),
  deliveredAt: new Date(),
  estimatedAt: new Date(),
  id: "exampleId",
  partial: "true",
  shippedAt: new Date(),
  tracking: "exampleTracking",
  trackingUrl: "exampleTrackingUrl",
  updatedAt: new Date(),
};
const CREATE_RESULT = {
  courier: "exampleCourier",
  createdAt: new Date(),
  declaredValues: 42.42,
  delayedAt: new Date(),
  deliveredAt: new Date(),
  estimatedAt: new Date(),
  id: "exampleId",
  partial: "true",
  shippedAt: new Date(),
  tracking: "exampleTracking",
  trackingUrl: "exampleTrackingUrl",
  updatedAt: new Date(),
};
const FIND_MANY_RESULT = [
  {
    courier: "exampleCourier",
    createdAt: new Date(),
    declaredValues: 42.42,
    delayedAt: new Date(),
    deliveredAt: new Date(),
    estimatedAt: new Date(),
    id: "exampleId",
    partial: "true",
    shippedAt: new Date(),
    tracking: "exampleTracking",
    trackingUrl: "exampleTrackingUrl",
    updatedAt: new Date(),
  },
];
const FIND_ONE_RESULT = {
  courier: "exampleCourier",
  createdAt: new Date(),
  declaredValues: 42.42,
  delayedAt: new Date(),
  deliveredAt: new Date(),
  estimatedAt: new Date(),
  id: "exampleId",
  partial: "true",
  shippedAt: new Date(),
  tracking: "exampleTracking",
  trackingUrl: "exampleTrackingUrl",
  updatedAt: new Date(),
};

const service = {
  create() {
    return CREATE_RESULT;
  },
  findMany: () => FIND_MANY_RESULT,
  findOne: ({ where }: { where: { id: string } }) => {
    switch (where.id) {
      case existingId:
        return FIND_ONE_RESULT;
      case nonExistingId:
        return null;
    }
  },
};

const basicAuthGuard = {
  canActivate: (context: ExecutionContext) => {
    const argumentHost = context.switchToHttp();
    const request = argumentHost.getRequest();
    request.user = {
      roles: ["user"],
    };
    return true;
  },
};

const acGuard = {
  canActivate: () => {
    return true;
  },
};

describe("Shipment", () => {
  let app: INestApplication;

  beforeAll(async () => {
    const moduleRef = await Test.createTestingModule({
      providers: [
        {
          provide: ShipmentService,
          useValue: service,
        },
      ],
      controllers: [ShipmentController],
      imports: [MorganModule.forRoot(), ACLModule],
    })
      .overrideGuard(DefaultAuthGuard)
      .useValue(basicAuthGuard)
      .overrideGuard(ACGuard)
      .useValue(acGuard)
      .compile();

    app = moduleRef.createNestApplication();
    await app.init();
  });

  test("POST /shipments", async () => {
    await request(app.getHttpServer())
      .post("/shipments")
      .send(CREATE_INPUT)
      .expect(HttpStatus.CREATED)
      .expect({
        ...CREATE_RESULT,
        createdAt: CREATE_RESULT.createdAt.toISOString(),
        delayedAt: CREATE_RESULT.delayedAt.toISOString(),
        deliveredAt: CREATE_RESULT.deliveredAt.toISOString(),
        estimatedAt: CREATE_RESULT.estimatedAt.toISOString(),
        shippedAt: CREATE_RESULT.shippedAt.toISOString(),
        updatedAt: CREATE_RESULT.updatedAt.toISOString(),
      });
  });

  test("GET /shipments", async () => {
    await request(app.getHttpServer())
      .get("/shipments")
      .expect(HttpStatus.OK)
      .expect([
        {
          ...FIND_MANY_RESULT[0],
          createdAt: FIND_MANY_RESULT[0].createdAt.toISOString(),
          delayedAt: FIND_MANY_RESULT[0].delayedAt.toISOString(),
          deliveredAt: FIND_MANY_RESULT[0].deliveredAt.toISOString(),
          estimatedAt: FIND_MANY_RESULT[0].estimatedAt.toISOString(),
          shippedAt: FIND_MANY_RESULT[0].shippedAt.toISOString(),
          updatedAt: FIND_MANY_RESULT[0].updatedAt.toISOString(),
        },
      ]);
  });

  test("GET /shipments/:id non existing", async () => {
    await request(app.getHttpServer())
      .get(`${"/shipments"}/${nonExistingId}`)
      .expect(404)
      .expect({
        statusCode: 404,
        message: `No resource was found for {"${"id"}":"${nonExistingId}"}`,
        error: "Not Found",
      });
  });

  test("GET /shipments/:id existing", async () => {
    await request(app.getHttpServer())
      .get(`${"/shipments"}/${existingId}`)
      .expect(HttpStatus.OK)
      .expect({
        ...FIND_ONE_RESULT,
        createdAt: FIND_ONE_RESULT.createdAt.toISOString(),
        delayedAt: FIND_ONE_RESULT.delayedAt.toISOString(),
        deliveredAt: FIND_ONE_RESULT.deliveredAt.toISOString(),
        estimatedAt: FIND_ONE_RESULT.estimatedAt.toISOString(),
        shippedAt: FIND_ONE_RESULT.shippedAt.toISOString(),
        updatedAt: FIND_ONE_RESULT.updatedAt.toISOString(),
      });
  });

  afterAll(async () => {
    await app.close();
  });
});
