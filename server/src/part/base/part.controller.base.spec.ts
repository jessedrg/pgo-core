import { Test } from "@nestjs/testing";
import { INestApplication, HttpStatus, ExecutionContext } from "@nestjs/common";
import request from "supertest";
import { MorganModule } from "nest-morgan";
import { ACGuard } from "nest-access-control";
import { DefaultAuthGuard } from "../../auth/defaultAuth.guard";
import { ACLModule } from "../../auth/acl.module";
import { PartController } from "../part.controller";
import { PartService } from "../part.service";

const nonExistingId = "nonExistingId";
const existingId = "existingId";
const CREATE_INPUT = {
  createdAt: new Date(),
  id: "exampleId",
  parts: 42,
  process: "exampleProcess",
  surface: 42.42,
  updatedAt: new Date(),
  visible: "true",
  volume: 42.42,
  volumeBoundingBox: 42.42,
  volumeChips: 42.42,
  x: 42.42,
  y: 42.42,
  z: 42.42,
};
const CREATE_RESULT = {
  createdAt: new Date(),
  id: "exampleId",
  parts: 42,
  process: "exampleProcess",
  surface: 42.42,
  updatedAt: new Date(),
  visible: "true",
  volume: 42.42,
  volumeBoundingBox: 42.42,
  volumeChips: 42.42,
  x: 42.42,
  y: 42.42,
  z: 42.42,
};
const FIND_MANY_RESULT = [
  {
    createdAt: new Date(),
    id: "exampleId",
    parts: 42,
    process: "exampleProcess",
    surface: 42.42,
    updatedAt: new Date(),
    visible: "true",
    volume: 42.42,
    volumeBoundingBox: 42.42,
    volumeChips: 42.42,
    x: 42.42,
    y: 42.42,
    z: 42.42,
  },
];
const FIND_ONE_RESULT = {
  createdAt: new Date(),
  id: "exampleId",
  parts: 42,
  process: "exampleProcess",
  surface: 42.42,
  updatedAt: new Date(),
  visible: "true",
  volume: 42.42,
  volumeBoundingBox: 42.42,
  volumeChips: 42.42,
  x: 42.42,
  y: 42.42,
  z: 42.42,
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

describe("Part", () => {
  let app: INestApplication;

  beforeAll(async () => {
    const moduleRef = await Test.createTestingModule({
      providers: [
        {
          provide: PartService,
          useValue: service,
        },
      ],
      controllers: [PartController],
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

  test("POST /parts", async () => {
    await request(app.getHttpServer())
      .post("/parts")
      .send(CREATE_INPUT)
      .expect(HttpStatus.CREATED)
      .expect({
        ...CREATE_RESULT,
        createdAt: CREATE_RESULT.createdAt.toISOString(),
        updatedAt: CREATE_RESULT.updatedAt.toISOString(),
      });
  });

  test("GET /parts", async () => {
    await request(app.getHttpServer())
      .get("/parts")
      .expect(HttpStatus.OK)
      .expect([
        {
          ...FIND_MANY_RESULT[0],
          createdAt: FIND_MANY_RESULT[0].createdAt.toISOString(),
          updatedAt: FIND_MANY_RESULT[0].updatedAt.toISOString(),
        },
      ]);
  });

  test("GET /parts/:id non existing", async () => {
    await request(app.getHttpServer())
      .get(`${"/parts"}/${nonExistingId}`)
      .expect(404)
      .expect({
        statusCode: 404,
        message: `No resource was found for {"${"id"}":"${nonExistingId}"}`,
        error: "Not Found",
      });
  });

  test("GET /parts/:id existing", async () => {
    await request(app.getHttpServer())
      .get(`${"/parts"}/${existingId}`)
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
