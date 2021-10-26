import { Test } from "@nestjs/testing";
import { INestApplication, HttpStatus, ExecutionContext } from "@nestjs/common";
import request from "supertest";
import { MorganModule } from "nest-morgan";
import { ACGuard } from "nest-access-control";
import { DefaultAuthGuard } from "../../auth/defaultAuth.guard";
import { ACLModule } from "../../auth/acl.module";
import { InviteController } from "../invite.controller";
import { InviteService } from "../invite.service";

const nonExistingId = "nonExistingId";
const existingId = "existingId";
const CREATE_INPUT = {
  active: "true",
  createdAt: new Date(),
  email: "exampleEmail",
  expiresAt: new Date(),
  id: "exampleId",
  updatedAt: new Date(),
};
const CREATE_RESULT = {
  active: "true",
  createdAt: new Date(),
  email: "exampleEmail",
  expiresAt: new Date(),
  id: "exampleId",
  updatedAt: new Date(),
};
const FIND_MANY_RESULT = [
  {
    active: "true",
    createdAt: new Date(),
    email: "exampleEmail",
    expiresAt: new Date(),
    id: "exampleId",
    updatedAt: new Date(),
  },
];
const FIND_ONE_RESULT = {
  active: "true",
  createdAt: new Date(),
  email: "exampleEmail",
  expiresAt: new Date(),
  id: "exampleId",
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

describe("Invite", () => {
  let app: INestApplication;

  beforeAll(async () => {
    const moduleRef = await Test.createTestingModule({
      providers: [
        {
          provide: InviteService,
          useValue: service,
        },
      ],
      controllers: [InviteController],
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

  test("POST /invites", async () => {
    await request(app.getHttpServer())
      .post("/invites")
      .send(CREATE_INPUT)
      .expect(HttpStatus.CREATED)
      .expect({
        ...CREATE_RESULT,
        createdAt: CREATE_RESULT.createdAt.toISOString(),
        expiresAt: CREATE_RESULT.expiresAt.toISOString(),
        updatedAt: CREATE_RESULT.updatedAt.toISOString(),
      });
  });

  test("GET /invites", async () => {
    await request(app.getHttpServer())
      .get("/invites")
      .expect(HttpStatus.OK)
      .expect([
        {
          ...FIND_MANY_RESULT[0],
          createdAt: FIND_MANY_RESULT[0].createdAt.toISOString(),
          expiresAt: FIND_MANY_RESULT[0].expiresAt.toISOString(),
          updatedAt: FIND_MANY_RESULT[0].updatedAt.toISOString(),
        },
      ]);
  });

  test("GET /invites/:id non existing", async () => {
    await request(app.getHttpServer())
      .get(`${"/invites"}/${nonExistingId}`)
      .expect(404)
      .expect({
        statusCode: 404,
        message: `No resource was found for {"${"id"}":"${nonExistingId}"}`,
        error: "Not Found",
      });
  });

  test("GET /invites/:id existing", async () => {
    await request(app.getHttpServer())
      .get(`${"/invites"}/${existingId}`)
      .expect(HttpStatus.OK)
      .expect({
        ...FIND_ONE_RESULT,
        createdAt: FIND_ONE_RESULT.createdAt.toISOString(),
        expiresAt: FIND_ONE_RESULT.expiresAt.toISOString(),
        updatedAt: FIND_ONE_RESULT.updatedAt.toISOString(),
      });
  });

  afterAll(async () => {
    await app.close();
  });
});
