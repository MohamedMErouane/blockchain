module game::game {
    use sui::coin::{Coin, split}; // Keeping only necessary imports

    // Define error codes
    const E_INSUFFICIENT_PAYMENT: u64 = 1;

    // Define the constant for the owner address
    const OWNER_ADDRESS: address = @0xd4d8d3613eab1cb48434c48f08f87345d5b4268489538f7095b140dcb3d968a4;

    // Define the Game struct
    public struct Game has key, store {
        id: UID,
        entry_fee: u64,
    }

    // Define the Transaction struct
    #[allow(unused_field)]  // Suppress warning for unused fields
    public struct Transaction has store {
        _player: address, // Prefixed with _ to avoid unused field warning
        _amount: u64,     // Prefixed with _ to avoid unused field warning
    }

    // Define the TransactionsStore struct
    #[allow(unused_field)]  // Suppress warning for unused fields
    public struct TransactionsStore has key, store {
        id: UID,
        _transactions: vector<Transaction>, // Prefixed with _ to avoid unused field warning
    }

    // Function to create a new game
    public fun create_game(ctx: &mut TxContext, entry_fee: u64): Game {
        Game { id: object::new(ctx), entry_fee }
    }

    // Process transaction with correct mutable reference to `Coin`
    public fun process_transaction(
        _player: address,  // Prefixed with _ to avoid unused variable warning
        amount: u64,
        game: &mut Game,
        coin: &mut Coin<u64>,  // Correctly pass &mut Coin<u64>
        ctx: &mut TxContext
    ) {
        // Check if the player has enough money
        assert!(amount >= game.entry_fee, E_INSUFFICIENT_PAYMENT);

        // Split the coin to get the exact amount using `&mut coin`
        let sent_coin = split(coin, amount, ctx);
        
        // Transfer the split coin
        transfer::public_transfer(sent_coin, OWNER_ADDRESS);
    }

    // Wrapper function for handling transactions
    public fun handle_transaction(
    _player: address,  
    amount: u64,
    game: &mut Game,
    coin: &mut Coin<u64>,
    ctx: &mut TxContext
) {
    std::debug::print("Processing transaction...");
    process_transaction(_player, amount, game, coin, ctx);
    std::debug::print("Transaction processed.");
}

}
