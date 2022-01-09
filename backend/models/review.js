class Review {
    constructor(
        id,
        user_id,
        restaurant_id,
        content,
        rating,
        price,
        posted_at,
        is_edited
    ) {
        this.id = id
        this.user_id = user_id
        this.restaurant_id = restaurant_id
        this.content = content
        this.rating = rating
        this.price = price
        this.posted_at = posted_at
        this.is_edited = is_edited
    }
}

module.exports = Review
