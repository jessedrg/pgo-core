import { Module } from "@nestjs/common";
import { UserModule } from "./user/user.module";
import { OfferModule } from "./offer/offer.module";
import { AccountModule } from "./account/account.module";
import { PartModule } from "./part/part.module";
import { PartConfigurationModule } from "./partConfiguration/partConfiguration.module";
import { PartOnShapeModule } from "./partOnShape/partOnShape.module";
import { QuoteModule } from "./quote/quote.module";
import { QuoteItemModule } from "./quoteItem/quoteItem.module";
import { ProductionModule } from "./production/production.module";
import { ProductionItemModule } from "./productionItem/productionItem.module";
import { ACLModule } from "./auth/acl.module";
import { AuthModule } from "./auth/auth.module";
import { SecretsManagerModule } from "./providers/secrets/secretsManager.module";
import { MorganModule } from "nest-morgan";
import { ConfigModule, ConfigService } from "@nestjs/config";
import { ServeStaticModule } from "@nestjs/serve-static";
import { ServeStaticOptionsService } from "./serveStaticOptions.service";
import { GraphQLModule } from "@nestjs/graphql";

@Module({
  controllers: [],
  imports: [
    UserModule,
    OfferModule,
    AccountModule,
    PartModule,
    PartConfigurationModule,
    PartOnShapeModule,
    QuoteModule,
    QuoteItemModule,
    ProductionModule,
    ProductionItemModule,
    ACLModule,
    AuthModule,
    SecretsManagerModule,
    MorganModule,
    ConfigModule.forRoot({ isGlobal: true }),
    ServeStaticModule.forRootAsync({
      useClass: ServeStaticOptionsService,
    }),
    GraphQLModule.forRootAsync({
      useFactory: (configService) => {
        const playground = configService.get("GRAPHQL_PLAYGROUND");
        const introspection = configService.get("GRAPHQL_INTROSPECTION");
        return {
          autoSchemaFile: true,
          playground,
          introspection: playground || introspection,
        };
      },
      inject: [ConfigService],
      imports: [ConfigModule],
    }),
  ],
  providers: [],
})
export class AppModule {}
