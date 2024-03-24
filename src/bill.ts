


export default function calculateTotalBill(totalTax: number, discount: number, amount: number) {

    const totalTaxAmount = amount * (totalTax / 100)

    const totalDiscountAmount = amount * (discount / 100)

    const totalBill = amount + totalTaxAmount - totalDiscountAmount

    return {
        totalPaid: totalBill,
    }

}