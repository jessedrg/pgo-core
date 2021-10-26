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
import { jwtAuthProvider } from "./auth-provider/ra-auth-jwt";

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
        authProvider={jwtAuthProvider}
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
      </Admin>
    </div>
  );
};

export default App;
