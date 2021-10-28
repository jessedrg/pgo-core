import React, { useEffect, useState } from "react";
import { Admin, DataProvider, Resource } from "react-admin";
import buildGraphQLProvider from "./data-provider/graphqlDataProvider";
import { theme } from "./theme/theme";
import Login from "./Login";
import "./App.scss";
import Dashboard from "./pages/Dashboard";
import { UserList } from "./user/UserList";
import { UserCreate } from "./user/UserCreate";
import { UserEdit } from "./user/UserEdit";
import { UserShow } from "./user/UserShow";
import { OfferList } from "./offer/OfferList";
import { OfferCreate } from "./offer/OfferCreate";
import { OfferEdit } from "./offer/OfferEdit";
import { OfferShow } from "./offer/OfferShow";
import { AccountList } from "./account/AccountList";
import { AccountCreate } from "./account/AccountCreate";
import { AccountEdit } from "./account/AccountEdit";
import { AccountShow } from "./account/AccountShow";
import { PartList } from "./part/PartList";
import { PartCreate } from "./part/PartCreate";
import { PartEdit } from "./part/PartEdit";
import { PartShow } from "./part/PartShow";
import { PartConfigurationList } from "./partConfiguration/PartConfigurationList";
import { PartConfigurationCreate } from "./partConfiguration/PartConfigurationCreate";
import { PartConfigurationEdit } from "./partConfiguration/PartConfigurationEdit";
import { PartConfigurationShow } from "./partConfiguration/PartConfigurationShow";
import { PartOnShapeList } from "./partOnShape/PartOnShapeList";
import { PartOnShapeCreate } from "./partOnShape/PartOnShapeCreate";
import { PartOnShapeEdit } from "./partOnShape/PartOnShapeEdit";
import { PartOnShapeShow } from "./partOnShape/PartOnShapeShow";
import { QuoteList } from "./quote/QuoteList";
import { QuoteCreate } from "./quote/QuoteCreate";
import { QuoteEdit } from "./quote/QuoteEdit";
import { QuoteShow } from "./quote/QuoteShow";
import { QuoteItemList } from "./quoteItem/QuoteItemList";
import { QuoteItemCreate } from "./quoteItem/QuoteItemCreate";
import { QuoteItemEdit } from "./quoteItem/QuoteItemEdit";
import { QuoteItemShow } from "./quoteItem/QuoteItemShow";
import { ProductionList } from "./production/ProductionList";
import { ProductionCreate } from "./production/ProductionCreate";
import { ProductionEdit } from "./production/ProductionEdit";
import { ProductionShow } from "./production/ProductionShow";
import { ProductionItemList } from "./productionItem/ProductionItemList";
import { ProductionItemCreate } from "./productionItem/ProductionItemCreate";
import { ProductionItemEdit } from "./productionItem/ProductionItemEdit";
import { ProductionItemShow } from "./productionItem/ProductionItemShow";
import { MediaFileList } from "./mediaFile/MediaFileList";
import { MediaFileCreate } from "./mediaFile/MediaFileCreate";
import { MediaFileEdit } from "./mediaFile/MediaFileEdit";
import { MediaFileShow } from "./mediaFile/MediaFileShow";
import { ProviderList } from "./provider/ProviderList";
import { ProviderCreate } from "./provider/ProviderCreate";
import { ProviderEdit } from "./provider/ProviderEdit";
import { ProviderShow } from "./provider/ProviderShow";
import { OrderList } from "./order/OrderList";
import { OrderCreate } from "./order/OrderCreate";
import { OrderEdit } from "./order/OrderEdit";
import { OrderShow } from "./order/OrderShow";
import { OrganizationList } from "./organization/OrganizationList";
import { OrganizationCreate } from "./organization/OrganizationCreate";
import { OrganizationEdit } from "./organization/OrganizationEdit";
import { OrganizationShow } from "./organization/OrganizationShow";
import { OrderItemList } from "./orderItem/OrderItemList";
import { OrderItemCreate } from "./orderItem/OrderItemCreate";
import { OrderItemEdit } from "./orderItem/OrderItemEdit";
import { OrderItemShow } from "./orderItem/OrderItemShow";
import { AgentList } from "./agent/AgentList";
import { AgentCreate } from "./agent/AgentCreate";
import { AgentEdit } from "./agent/AgentEdit";
import { AgentShow } from "./agent/AgentShow";
import { AddressList } from "./address/AddressList";
import { AddressCreate } from "./address/AddressCreate";
import { AddressEdit } from "./address/AddressEdit";
import { AddressShow } from "./address/AddressShow";
import { ShipmentList } from "./shipment/ShipmentList";
import { ShipmentCreate } from "./shipment/ShipmentCreate";
import { ShipmentEdit } from "./shipment/ShipmentEdit";
import { ShipmentShow } from "./shipment/ShipmentShow";
import { PaymentList } from "./payment/PaymentList";
import { PaymentCreate } from "./payment/PaymentCreate";
import { PaymentEdit } from "./payment/PaymentEdit";
import { PaymentShow } from "./payment/PaymentShow";
import { AccountPaymentMethodList } from "./accountPaymentMethod/AccountPaymentMethodList";
import { AccountPaymentMethodCreate } from "./accountPaymentMethod/AccountPaymentMethodCreate";
import { AccountPaymentMethodEdit } from "./accountPaymentMethod/AccountPaymentMethodEdit";
import { AccountPaymentMethodShow } from "./accountPaymentMethod/AccountPaymentMethodShow";
import { InviteList } from "./invite/InviteList";
import { InviteCreate } from "./invite/InviteCreate";
import { InviteEdit } from "./invite/InviteEdit";
import { InviteShow } from "./invite/InviteShow";
import { SessionList } from "./session/SessionList";
import { SessionCreate } from "./session/SessionCreate";
import { SessionEdit } from "./session/SessionEdit";
import { SessionShow } from "./session/SessionShow";
import { HolidayList } from "./holiday/HolidayList";
import { HolidayCreate } from "./holiday/HolidayCreate";
import { HolidayEdit } from "./holiday/HolidayEdit";
import { HolidayShow } from "./holiday/HolidayShow";
import { PartMessageList } from "./partMessage/PartMessageList";
import { PartMessageCreate } from "./partMessage/PartMessageCreate";
import { PartMessageEdit } from "./partMessage/PartMessageEdit";
import { PartMessageShow } from "./partMessage/PartMessageShow";
import { httpAuthProvider } from "./auth-provider/ra-auth-http";

const App = (): React.ReactElement => {
  const [dataProvider, setDataProvider] = useState<DataProvider | null>(null);
  useEffect(() => {
    buildGraphQLProvider
      .then((provider: any) => {
        setDataProvider(() => provider);
      })
      .catch((error: any) => {
        console.log(error);
      });
  }, []);
  if (!dataProvider) {
    return <div>Loading</div>;
  }
  return (
    <div className="App">
      <Admin
        title={"ProtoAndGoCore"}
        dataProvider={dataProvider}
        authProvider={httpAuthProvider}
        theme={theme}
        dashboard={Dashboard}
        loginPage={Login}
      >
        <Resource
          name="User"
          list={UserList}
          edit={UserEdit}
          create={UserCreate}
          show={UserShow}
        />
        <Resource
          name="Offer"
          list={OfferList}
          edit={OfferEdit}
          create={OfferCreate}
          show={OfferShow}
        />
        <Resource
          name="Account"
          list={AccountList}
          edit={AccountEdit}
          create={AccountCreate}
          show={AccountShow}
        />
        <Resource
          name="Part"
          list={PartList}
          edit={PartEdit}
          create={PartCreate}
          show={PartShow}
        />
        <Resource
          name="PartConfiguration"
          list={PartConfigurationList}
          edit={PartConfigurationEdit}
          create={PartConfigurationCreate}
          show={PartConfigurationShow}
        />
        <Resource
          name="PartOnShape"
          list={PartOnShapeList}
          edit={PartOnShapeEdit}
          create={PartOnShapeCreate}
          show={PartOnShapeShow}
        />
        <Resource
          name="Quote"
          list={QuoteList}
          edit={QuoteEdit}
          create={QuoteCreate}
          show={QuoteShow}
        />
        <Resource
          name="QuoteItem"
          list={QuoteItemList}
          edit={QuoteItemEdit}
          create={QuoteItemCreate}
          show={QuoteItemShow}
        />
        <Resource
          name="Production"
          list={ProductionList}
          edit={ProductionEdit}
          create={ProductionCreate}
          show={ProductionShow}
        />
        <Resource
          name="ProductionItem"
          list={ProductionItemList}
          edit={ProductionItemEdit}
          create={ProductionItemCreate}
          show={ProductionItemShow}
        />
        <Resource
          name="MediaFile"
          list={MediaFileList}
          edit={MediaFileEdit}
          create={MediaFileCreate}
          show={MediaFileShow}
        />
        <Resource
          name="Provider"
          list={ProviderList}
          edit={ProviderEdit}
          create={ProviderCreate}
          show={ProviderShow}
        />
        <Resource
          name="Order"
          list={OrderList}
          edit={OrderEdit}
          create={OrderCreate}
          show={OrderShow}
        />
        <Resource
          name="Organization"
          list={OrganizationList}
          edit={OrganizationEdit}
          create={OrganizationCreate}
          show={OrganizationShow}
        />
        <Resource
          name="OrderItem"
          list={OrderItemList}
          edit={OrderItemEdit}
          create={OrderItemCreate}
          show={OrderItemShow}
        />
        <Resource
          name="Agent"
          list={AgentList}
          edit={AgentEdit}
          create={AgentCreate}
          show={AgentShow}
        />
        <Resource
          name="Address"
          list={AddressList}
          edit={AddressEdit}
          create={AddressCreate}
          show={AddressShow}
        />
        <Resource
          name="Shipment"
          list={ShipmentList}
          edit={ShipmentEdit}
          create={ShipmentCreate}
          show={ShipmentShow}
        />
        <Resource
          name="Payment"
          list={PaymentList}
          edit={PaymentEdit}
          create={PaymentCreate}
          show={PaymentShow}
        />
        <Resource
          name="AccountPaymentMethod"
          list={AccountPaymentMethodList}
          edit={AccountPaymentMethodEdit}
          create={AccountPaymentMethodCreate}
          show={AccountPaymentMethodShow}
        />
        <Resource
          name="Invite"
          list={InviteList}
          edit={InviteEdit}
          create={InviteCreate}
          show={InviteShow}
        />
        <Resource
          name="Session"
          list={SessionList}
          edit={SessionEdit}
          create={SessionCreate}
          show={SessionShow}
        />
        <Resource
          name="Holiday"
          list={HolidayList}
          edit={HolidayEdit}
          create={HolidayCreate}
          show={HolidayShow}
        />
        <Resource
          name="PartMessage"
          list={PartMessageList}
          edit={PartMessageEdit}
          create={PartMessageCreate}
          show={PartMessageShow}
        />
      </Admin>
    </div>
  );
};

export default App;
