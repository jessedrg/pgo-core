import { Test } from "@nestjs/testing";
import { INestApplication, HttpStatus, ExecutionContext } from "@nestjs/common";
import request from "supertest";
import { MorganModule } from "nest-morgan";
import { ACGuard } from "nest-access-control";
import { DefaultAuthGuard } from "../../auth/defaultAuth.guard";
import { ACLModule } from "../../auth/acl.module";
import { PartOnShapeController } from "../partOnShape.controller";
import { PartOnShapeService } from "../partOnShape.service";

const nonExistingId = "nonExistingId";
const existingId = "existingId";
const CREATE_INPUT = {
  createdAt: new Date(),
  did: "exampleDid",
  eid: "exampleEid",
  id: "exampleId",
  updatedAt: new Date(),
  wid: "exampleWid",
};
const CREATE_RESULT = {
  createdAt: new Date(),
  did: "exampleDid",
  eid: "exampleEid",
  id: "exampleId",
  updatedAt: new Date(),
  wid: "exampleWid",
};
const FIND_MANY_RESULT = [
  {
    createdAt: new Date(),
    did: "exampleDid",
    eid: "exampleEid",
    id: "exampleId",
    updatedAt: new Date(),
    wid: "exampleWid",
  },
];
const FIND_ONE_RESULT = {
  createdAt: new Date(),
  did: "exampleDid",
  eid: "exampleEid",
  id: "exampleId",
  updatedAt: new Date(),
  wid: "exampleWid",
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

describe("PartOnShape", () => {
  let app: INestApplication;

  beforeAll(async () => {
    const moduleRef = await Test.createTestingModule({
      providers: [
        {
          provide: PartOnShapeService,
          useValue: service,
        },
      ],
      controllers: [PartOnShapeController],
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

  test("POST /part-on-shapes", async () => {
    await request(app.getHttpServer())
      .post("/part-on-shapes")
      .send(CREATE_INPUT)
      .expect(HttpStatus.CREATED)
      .expect({
        ...CREATE_RESULT,
        createdAt: CREATE_RESULT.createdAt.toISOString(),
        updatedAt: CREATE_RESULT.updatedAt.toISOString(),
      });
  });

  test("GET /part-on-shapes", async () => {
    await request(app.getHttpServer())
      .get("/part-on-shapes")
      .expect(HttpStatus.OK)
      .expect([
        {
          ...FIND_MANY_RESULT[0],
          createdAt: FIND_MANY_RESULT[0].createdAt.toISOString(),
          updatedAt: FIND_MANY_RESULT[0].updatedAt.toISOString(),
        },
      ]);
  });

  test("GET /part-on-shapes/:id non existing", async () => {
    await request(app.getHttpServer())
      .get(`${"/part-on-shapes"}/${nonExistingId}`)
      .expect(404)
      .expect({
        statusCode: 404,
        message: `No resource was found for {"${"id"}":"${nonExistingId}"}`,
        error: "Not Found",
      });
  });

  test("GET /part-on-shapes/:id existing", async () => {
    await request(app.getHttpServer())
      .get(`${"/part-on-shapes"}/${existingId}`)
      .expect(HttpStatus.OK)
      .expect({
        ...FIND_ONE_RESULT,
        createdAt: FIND_ONE_RESULT.createdAt.toISOString(),
        updatedAt: FIND_ONE_RESULT.updatedAt.toISOString(),
      });
  });

  afterAll(async () => {
    await app.close();
  });
});
