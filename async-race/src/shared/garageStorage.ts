import { getAllCars } from "./server";

export function getCountOfPages() {
    getAllCars().then((data) => {
        const countOfPages = Math.ceil(data.length / 7);
    });
}