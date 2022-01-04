class User {
    constructor(
        id,
        username,
        email,
        password,
        fullname,
        gender,
        zipcode,
        address,
        country,
        mobile_number,
        profile_picture_path
    ) {
        this.id = id
        this.username = username
        this.email = email
        this.password = password
        this.fullname = fullname
        this.gender = gender
        this.zipcode = zipcode
        this.address = address
        this.country = country
        this.mobile_number = mobile_number
        this.profile_picture_path = profile_picture_path
    }
}

module.exports = User
