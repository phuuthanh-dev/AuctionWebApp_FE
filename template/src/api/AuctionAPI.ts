import { Auction } from "../models/Auction";
import { MyRequest } from "./MyRequest";

interface ResultInteface {
    auctionsData: Auction[];
}

export async function getAuctions(state: string, cateId: number): Promise<ResultInteface> {
    const auctions: Auction[] = [];
    // endpoint
    const URL = `http://localhost:8080/api/v1/auction/sorted-and-paged?state=${state}&categoryId=${cateId}`;
    console.log(URL);

    // request
    const response = await MyRequest(URL);
    const responseData = response.content;
    if (responseData) {
        for (const key in responseData) {
            auctions.push({
                id: responseData[key].id,
                name: responseData[key].name,
                description: responseData[key].description,
                firstPrice: responseData[key].firstPrice,
                lastPrice: responseData[key].lastPrice,
                participationFee: responseData[key].participationFee,
                deposit: responseData[key].deposit,
                priceStep: responseData[key].priceStep,
                startDate: responseData[key].startDate,
                endDate: responseData[key].endDate,
                countdownDuration: responseData[key].countdownDuration,
                state: responseData[key].state,
                jewelry: {
                    id: responseData[key].jewelry.id,
                    user: {
                        id: responseData[key].jewelry.user.id,
                        fullName: responseData[key].jewelry.user.fullName,
                    }
                },
            })
        }
    } else {
        throw new Error("Phiên không tồn tại");
    }
    return { auctionsData: auctions };
}

export async function getAuctionToday(): Promise<ResultInteface> {
    const auctions: Auction[] = [];
    // endpoint
    const URL = `http://localhost:8080/api/v1/auction/get-by-today`;

    // request
    const response = await MyRequest(URL);

    if (response) {
        for (const key in response) {

            auctions.push({
                id: response[key].id,
                name: response[key].name,
                description: response[key].description,
                firstPrice: response[key].firstPrice,
                lastPrice: response[key].lastPrice,
                participationFee: response[key].participationFee,
                deposit: response[key].deposit,
                priceStep: response[key].priceStep,
                startDate: response[key].startDate,
                endDate: response[key].endDate,
                countdownDuration: response[key].countdownDuration,
                state: response[key].state,
                jewelry: {
                    id: response[key].jewelry.id,
                },
            })
        }
    } else {
        throw new Error("Phiên không tồn tại");
    }
    return { auctionsData: auctions };
}

export async function getAuction(auctionId: number): Promise<Auction | null> {
    // endpoint
    const URL = `http://localhost:8080/api/v1/auction/id/${auctionId}`;

    try {
        // request
        const response = await MyRequest(URL);

        if (response) {
            return {
                id: response.id,
                name: response.name,
                description: response.description,
                firstPrice: response.firstPrice,
                lastPrice: response.lastPrice,
                participationFee: response.participationFee,
                deposit: response.deposit,
                priceStep: response.priceStep,
                startDate: response.startDate,
                endDate: response.endDate,
                countdownDuration: response.countdownDuration,
                state: response.state,
                jewelry: {
                    id: response.jewelry.id,
                    name: response.jewelry.name,
                    description: response.jewelry.description,
                    user: {
                        id: response.jewelry.user.id,
                        username: response.jewelry.user.username,
                        fullName: response.jewelry.user.fullName,
                    }
                },
                user: {
                    id: response.user.id,
                    username: response.user.username,
                    fullName: response.user.fullName,
                }
            }
        } else {
            throw new Error("Phiên không tồn tại");
        }
    } catch (error) {
        console.error("Error", error);
        return null
    }
}

export async function getAuctionByState(state: string): Promise<ResultInteface> {
    const auctions: Auction[] = [];

    // endpoint
    const URL = `http://localhost:8080/api/v1/auction/get-by-state/${state}`;

    // request
    const response = await MyRequest(URL);

    if (response) {
        for (const key in response) {

            auctions.push({
                id: response[key].id,
                name: response[key].name,
                description: response[key].description,
                firstPrice: response[key].firstPrice,
                lastPrice: response[key].lastPrice,
                participationFee: response[key].participationFee,
                deposit: response[key].deposit,
                priceStep: response[key].priceStep,
                startDate: response[key].startDate,
                endDate: response[key].endDate,
                countdownDuration: response[key].countdownDuration,
                state: response[key].state,
                jewelry: {
                    id: response[key].jewelry.id,
                },
            })
        }
    } else {
        throw new Error("Phiên không tồn tại");
    }
    return { auctionsData: auctions };
}