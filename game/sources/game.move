module game::payment {
    use sui::event;
    use sui::coin::{Self, Coin};

    // Define a special amount that the user needs to pay
    const SPECIAL_AMOUNT: u64 = 1000;

    // Define your wallet address (replace with your actual address)
    const MY_WALLET_ADDRESS: address = @0xd4d8d3613eab1cb48434c48f08f87345d5b4268489538f7095b140dcb3d968a4;

    // Define an event to be emitted when the payment is successful
    public struct PaymentSuccessEvent has copy, drop {
        payer: address,
        amount: u64,
    }

    // Function to accept payment and check if it matches the special amount
    public entry fun pay_special_amount(payment: Coin<sui::sui::SUI>, ctx: &mut TxContext) {
        let amount = coin::value(&payment);

        // Check if the payment matches the special amount
        if (amount == SPECIAL_AMOUNT) {
            // Emit a success event
            event::emit(PaymentSuccessEvent {
                payer: tx_context::sender(ctx),
                amount: amount,
            });

            // Transfer the payment to your wallet
            transfer::public_transfer(payment, MY_WALLET_ADDRESS);
        } else {
            // If the amount is not correct, abort the transaction
            abort 0
        }
    }
}