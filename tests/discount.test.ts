import { expect, test, describe } from "vitest";
import { calculateTotalBill } from "../src/bill";


describe("Total Bill", () => {
    test("should return the total bill after discount", () => {
        const actual = calculateTotalBill(26, 0, 454.37);
        const expected = 572.5062;
        expect(actual.totalPaid).toEqual(expected);
    });

    test("should return the total bill after discount", () => {
        const actual = calculateTotalBill(10, 20, 450);
        const expected = 405;
        expect(actual.totalPaid).toEqual(expected);
    });

    test("should return the total bill after discount", () => {
        const actual = calculateTotalBill(15, 30, 200);
        const expected = 170;
        expect(actual.totalPaid).toEqual(expected);
    });
})