-- CreateEnum
CREATE TYPE "EnumOfferStatus" AS ENUM ('draft', 'pending', 'publish', 'rejected');

-- CreateEnum
CREATE TYPE "EnumPartStatus" AS ENUM ('draft', 'pending', 'rejected', 'publish');

-- CreateEnum
CREATE TYPE "EnumQuoteStatus" AS ENUM ('pending', 'completed', 'canceled', 'rejected');

-- CreateEnum
CREATE TYPE "EnumQuoteItemStatus" AS ENUM ('pending', 'completed', 'rejected', 'canceled');

-- CreateEnum
CREATE TYPE "EnumProductionStatus" AS ENUM ('pending', 'processing', 'shipped', 'quality', 'completed', 'canceled', 'rejected');

-- CreateEnum
CREATE TYPE "EnumOrderState" AS ENUM ('onHold', 'failed', 'processing', 'production', 'quality', 'shipped', 'completed', 'cancelled', 'refound');

-- CreateEnum
CREATE TYPE "EnumShipmentStatus" AS ENUM ('pending', 'OnTransit', 'delivered');

-- CreateEnum
CREATE TYPE "EnumPaymentStatus" AS ENUM ('pending', 'completed', 'rejected');

-- CreateTable
CREATE TABLE "User" (
    "accountIdId" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "firstName" TEXT,
    "id" TEXT NOT NULL,
    "lastName" TEXT,
    "organizationIdId" TEXT,
    "password" TEXT NOT NULL,
    "roles" TEXT[],
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "username" TEXT NOT NULL,

    PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Offer" (
    "accountIdId" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "customNo" TEXT,
    "id" TEXT NOT NULL,
    "partIdId" TEXT,
    "publishedAt" TIMESTAMP(3),
    "status" "EnumOfferStatus",
    "updatedAt" TIMESTAMP(3) NOT NULL,

    PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Account" (
    "active" BOOLEAN,
    "configuration" JSONB,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "email" TEXT NOT NULL,
    "id" TEXT NOT NULL,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Part" (
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "id" TEXT NOT NULL,
    "parts" INTEGER,
    "process" TEXT,
    "quantities" JSONB,
    "status" "EnumPartStatus",
    "surface" DOUBLE PRECISION,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "visible" BOOLEAN,
    "volume" DOUBLE PRECISION,
    "volumeBoundingBox" DOUBLE PRECISION,
    "volumeChips" DOUBLE PRECISION,
    "x" DOUBLE PRECISION,
    "y" DOUBLE PRECISION,
    "z" DOUBLE PRECISION,

    PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "PartConfiguration" (
    "colorFinish" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "finish" TEXT,
    "hardness" TEXT,
    "id" TEXT NOT NULL,
    "material" TEXT,
    "materialType" TEXT,
    "partIdId" TEXT,
    "tech" TEXT,
    "tolerance" DOUBLE PRECISION,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "weight" DOUBLE PRECISION,

    PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "PartOnShape" (
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "did" TEXT,
    "eid" TEXT,
    "id" TEXT NOT NULL,
    "partIdId" TEXT,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "wid" TEXT,

    PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Quote" (
    "accountIdId" TEXT,
    "completedAt" TIMESTAMP(3),
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "id" TEXT NOT NULL,
    "providerIdId" TEXT,
    "status" "EnumQuoteStatus"[],
    "updatedAt" TIMESTAMP(3) NOT NULL,

    PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "QuoteItem" (
    "basePrices" DOUBLE PRECISION,
    "constructionType" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "id" TEXT NOT NULL,
    "margins" DOUBLE PRECISION,
    "partIdId" TEXT,
    "prices" DOUBLE PRECISION,
    "productionDays" INTEGER,
    "providerIdId" TEXT,
    "quantities" INTEGER,
    "status" "EnumQuoteItemStatus",
    "updatedAt" TIMESTAMP(3) NOT NULL,

    PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Production" (
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "discomformity" BOOLEAN,
    "id" TEXT NOT NULL,
    "orderIdId" TEXT,
    "partIdId" TEXT,
    "providerIdId" TEXT,
    "status" "EnumProductionStatus",
    "updatedAt" TIMESTAMP(3) NOT NULL,

    PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ProductionItem" (
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "id" TEXT NOT NULL,
    "partIdId" TEXT,
    "productionIdId" TEXT,
    "quantity" INTEGER,
    "shippedQuantity" INTEGER,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "MediaFile" (
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "id" TEXT NOT NULL,
    "type" TEXT,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "url" TEXT,

    PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Provider" (
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "currency" TEXT,
    "dateFormat" TEXT,
    "holidaysIdId" TEXT,
    "id" TEXT NOT NULL,
    "name" TEXT,
    "rating" DOUBLE PRECISION,
    "ratingData" JSONB,
    "shippmentDates" INTEGER,
    "technologies" JSONB,
    "typeson" TEXT,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "workingDays" JSONB,

    PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Order" (
    "acountIdId" TEXT,
    "billingAddress" JSONB,
    "comment" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "customNo" TEXT,
    "estimatedDays" INTEGER,
    "fees" JSONB,
    "id" TEXT NOT NULL,
    "organizationIdId" TEXT,
    "shipmentIdId" TEXT,
    "shippingaddress" JSONB,
    "state" "EnumOrderState"[],
    "subtotal" DOUBLE PRECISION,
    "taxes" JSONB,
    "total" DOUBLE PRECISION,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Organization" (
    "contactAdressIdId" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "id" TEXT NOT NULL,
    "name" TEXT,
    "paymenMethodIdId" TEXT,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "OrderItem" (
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "id" TEXT NOT NULL,
    "orderIdId" TEXT,
    "partIdId" TEXT,
    "price" DOUBLE PRECISION,
    "quantity" INTEGER,
    "total" DOUBLE PRECISION,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Agent" (
    "accountIdId" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "id" TEXT NOT NULL,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "zones" JSONB,

    PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Address" (
    "company" TEXT,
    "country" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "firstName" TEXT,
    "id" TEXT NOT NULL,
    "lastName" TEXT,
    "locality" TEXT,
    "phone" TEXT,
    "phonePrefix" TEXT,
    "postalCode" TEXT,
    "state" TEXT,
    "street" TEXT,
    "streetNumber" TEXT,
    "type" TEXT,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "vat" TEXT,

    PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Shipment" (
    "courier" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "declaredValues" DOUBLE PRECISION,
    "delayedAt" TIMESTAMP(3),
    "deliveredAt" TIMESTAMP(3),
    "estimatedAt" TIMESTAMP(3),
    "id" TEXT NOT NULL,
    "partial" BOOLEAN,
    "realtedId" TEXT,
    "relatedType" TEXT,
    "shippedAt" TIMESTAMP(3),
    "status" "EnumShipmentStatus",
    "tracking" TEXT,
    "trackingUrl" TEXT,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Payment" (
    "accountIdId" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "id" TEXT NOT NULL,
    "orderIdId" TEXT,
    "status" "EnumPaymentStatus",
    "transactionId" TEXT,
    "transactionUserId" TEXT,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "AccountPaymentMethod" (
    "accountIdId" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "data" JSONB,
    "id" TEXT NOT NULL,
    "organizationIdId" TEXT,
    "type" TEXT,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Invite" (
    "accountIdId" TEXT,
    "active" BOOLEAN,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "email" TEXT,
    "expiresAt" TIMESTAMP(3),
    "id" TEXT NOT NULL,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Session" (
    "authMethod" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "id" TEXT NOT NULL,
    "sessionToken" TEXT,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "userIdId" TEXT,

    PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Holiday" (
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "day" INTEGER,
    "id" TEXT NOT NULL,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "PartMessage" (
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "id" TEXT NOT NULL,
    "message" TEXT,
    "messageType" TEXT,
    "partIdId" TEXT,
    "recieverIdId" TEXT,
    "senderIdId" TEXT,
    "type" TEXT,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "_labeIsInShipment" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "_attachments" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "User.username_unique" ON "User"("username");

-- CreateIndex
CREATE UNIQUE INDEX "Offer.customNo_unique" ON "Offer"("customNo");

-- CreateIndex
CREATE UNIQUE INDEX "Account.email_unique" ON "Account"("email");

-- CreateIndex
CREATE UNIQUE INDEX "Invite.email_unique" ON "Invite"("email");

-- CreateIndex
CREATE UNIQUE INDEX "_labeIsInShipment_AB_unique" ON "_labeIsInShipment"("A", "B");

-- CreateIndex
CREATE INDEX "_labeIsInShipment_B_index" ON "_labeIsInShipment"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_attachments_AB_unique" ON "_attachments"("A", "B");

-- CreateIndex
CREATE INDEX "_attachments_B_index" ON "_attachments"("B");

-- AddForeignKey
ALTER TABLE "User" ADD FOREIGN KEY ("accountIdId") REFERENCES "Account"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "User" ADD FOREIGN KEY ("organizationIdId") REFERENCES "Organization"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Offer" ADD FOREIGN KEY ("accountIdId") REFERENCES "Account"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Offer" ADD FOREIGN KEY ("partIdId") REFERENCES "Part"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "PartConfiguration" ADD FOREIGN KEY ("partIdId") REFERENCES "Part"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "PartOnShape" ADD FOREIGN KEY ("partIdId") REFERENCES "Part"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Quote" ADD FOREIGN KEY ("accountIdId") REFERENCES "Account"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Quote" ADD FOREIGN KEY ("providerIdId") REFERENCES "Provider"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "QuoteItem" ADD FOREIGN KEY ("partIdId") REFERENCES "Part"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "QuoteItem" ADD FOREIGN KEY ("providerIdId") REFERENCES "Provider"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Production" ADD FOREIGN KEY ("orderIdId") REFERENCES "Order"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Production" ADD FOREIGN KEY ("partIdId") REFERENCES "Part"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Production" ADD FOREIGN KEY ("providerIdId") REFERENCES "Provider"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ProductionItem" ADD FOREIGN KEY ("partIdId") REFERENCES "Part"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ProductionItem" ADD FOREIGN KEY ("productionIdId") REFERENCES "Production"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Provider" ADD FOREIGN KEY ("holidaysIdId") REFERENCES "Holiday"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Order" ADD FOREIGN KEY ("acountIdId") REFERENCES "Account"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Order" ADD FOREIGN KEY ("organizationIdId") REFERENCES "Organization"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Order" ADD FOREIGN KEY ("shipmentIdId") REFERENCES "Shipment"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Organization" ADD FOREIGN KEY ("contactAdressIdId") REFERENCES "Address"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Organization" ADD FOREIGN KEY ("paymenMethodIdId") REFERENCES "AccountPaymentMethod"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "OrderItem" ADD FOREIGN KEY ("orderIdId") REFERENCES "Order"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "OrderItem" ADD FOREIGN KEY ("partIdId") REFERENCES "Part"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Agent" ADD FOREIGN KEY ("accountIdId") REFERENCES "Account"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Payment" ADD FOREIGN KEY ("accountIdId") REFERENCES "Account"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Payment" ADD FOREIGN KEY ("orderIdId") REFERENCES "Order"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "AccountPaymentMethod" ADD FOREIGN KEY ("accountIdId") REFERENCES "Account"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "AccountPaymentMethod" ADD FOREIGN KEY ("organizationIdId") REFERENCES "Organization"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Invite" ADD FOREIGN KEY ("accountIdId") REFERENCES "Account"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Session" ADD FOREIGN KEY ("userIdId") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "PartMessage" ADD FOREIGN KEY ("partIdId") REFERENCES "Part"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "PartMessage" ADD FOREIGN KEY ("recieverIdId") REFERENCES "Account"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "PartMessage" ADD FOREIGN KEY ("senderIdId") REFERENCES "Account"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_labeIsInShipment" ADD FOREIGN KEY ("A") REFERENCES "MediaFile"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_labeIsInShipment" ADD FOREIGN KEY ("B") REFERENCES "Shipment"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_attachments" ADD FOREIGN KEY ("A") REFERENCES "MediaFile"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_attachments" ADD FOREIGN KEY ("B") REFERENCES "Shipment"("id") ON DELETE CASCADE ON UPDATE CASCADE;
