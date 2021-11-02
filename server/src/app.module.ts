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
import { MediaFileModule } from "./mediaFile/mediaFile.module";
import { ProviderModule } from "./provider/provider.module";
import { OrderModule } from "./order/order.module";
import { OrganizationModule } from "./organization/organization.module";
import { OrderItemModule } from "./orderItem/orderItem.module";
import { AgentModule } from "./agent/agent.module";
import { AddressModule } from "./address/address.module";
import { ShipmentModule } from "./shipment/shipment.module";
import { PaymentModule } from "./payment/payment.module";
import { OrganizationPaymentMethodModule } from "./organizationPaymentMethod/organizationPaymentMethod.module";
import { InviteModule } from "./invite/invite.module";
import { HolidayModule } from "./holiday/holiday.module";
import { PartMessageModule } from "./partMessage/partMessage.module";
import { PriceModule } from "./price/price.module";
import { MarginModule } from "./margin/margin.module";
import { ACLModule } from "./auth/acl.module";
import { AuthModule } from "./auth/auth.module";
import { HealthModule } from "./health/health.module";
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
    MediaFileModule,
    ProviderModule,
    OrderModule,
    OrganizationModule,
    OrderItemModule,
    AgentModule,
    AddressModule,
    ShipmentModule,
    PaymentModule,
    OrganizationPaymentMethodModule,
    InviteModule,
    HolidayModule,
    PartMessageModule,
    PriceModule,
    MarginModule,
    ACLModule,
    AuthModule,
    HealthModule,
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
