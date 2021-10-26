import { Test } from "@nestjs/testing";
import { INestApplication, HttpStatus, ExecutionContext } from "@nestjs/common";
import request from "supertest";
import { MorganModule } from "nest-morgan";
import { ACGuard } from "nest-access-control";
import { DefaultAuthGuard } from "../../auth/defaultAuth.guard";
import { ACLModule } from "../../auth/acl.module";
import { PartConfigurationController } from "../partConfiguration.controller";
import { PartConfigurationService } from "../partConfiguration.service";

const nonExistingId = "nonExistingId";
const existingId = "existingId";
const CREATE_INPUT = {
  colorFinish: "exampleColorFinish",
  createdAt: new Date(),
  finish: "exampleFinish",
  hardness: "exampleHardness",
  id: "exampleId",
  material: "exampleMaterial",
  materialType: "exampleMaterialType",
  tech: "exampleTech",
  tolerance: 42.42,
  updatedAt: new Date(),
  weight: 42.42,
};
const CREATE_RESULT = {
  colorFinish: "exampleColorFinish",
  createdAt: new Date(),
  finish: "exampleFinish",
  hardness: "exampleHardness",
  id: "exampleId",
  material: "exampleMaterial",
  materialType: "exampleMaterialType",
  tech: "exampleTech",
  tolerance: 42.42,
  updatedAt: new Date(),
  weight: 42.42,
};
const FIND_MANY_RESULT = [
  {
    colorFinish: "exampleColorFinish",
    createdAt: new Date(),
    finish: "exampleFinish",
    hardness: "exampleHardness",
    id: "exampleId",
    material: "exampleMaterial",
    materialType: "exampleMaterialType",
    tech: "exampleTech",
    tolerance: 42.42,
    updatedAt: new Date(),
    weight: 42.42,
  },
];
const FIND_ONE_RESULT = {
  colorFinish: "exampleColorFinish",
  createdAt: new Date(),
  finish: "exampleFinish",
  hardness: "exampleHardness",
  id: "exampleId",
  material: "exampleMaterial",
  materialType: "exampleMaterialType",
  tech: "exampleTech",
  tolerance: 42.42,
  updatedAt: new Date(),
  weight: 42.42,
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

describe("PartConfiguration", () => {
  let app: INestApplication;

  beforeAll(async () => {
    const moduleRef = await Test.createTestingModule({
      providers: [
        {
          provide: PartConfigurationService,
          useValue: service,
        },
      ],
      controllers: [PartConfigurationController],
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

  test("POST /part-configurations", async () => {
    await request(app.getHttpServer())
      .post("/part-configurations")
      .send(CREATE_INPUT)
      .expect(HttpStatus.CREATED)
      .expect({
        ...CREATE_RESULT,
        createdAt: CREATE_RESULT.createdAt.toISOString(),
        updatedAt: CREATE_RESULT.updatedAt.toISOString(),
      });
  });

  test("GET /part-configurations", async () => {
    await request(app.getHttpServer())
      .get("/part-configurations")
      .expect(HttpStatus.OK)
      .expect([
        {
          ...FIND_MANY_RESULT[0],
          createdAt: FIND_MANY_RESULT[0].createdAt.toISOString(),
          updatedAt: FIND_MANY_RESULT[0].updatedAt.toISOString(),
        },
      ]);
  });

  test("GET /part-configurations/:id non existing", async () => {
    await request(app.getHttpServer())
      .get(`${"/part-configurations"}/${nonExistingId}`)
      .expect(404)
      .expect({
        statusCode: 404,
        message: `No resource was found for {"${"id"}":"${nonExistingId}"}`,
        error: "Not Found",
      });
  });

  test("GET /part-configurations/:id existing", async () => {
    await request(app.getHttpServer())
      .get(`${"/part-configurations"}/${existingId}`)
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
