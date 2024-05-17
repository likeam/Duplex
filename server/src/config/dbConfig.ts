import mongoose from 'mongoose'


const connectDb = async () => {

    try {
        const connect = mongoose.connect(`${process.env.CONNECTION_STRING}`)
        console.log("Database Connected:", (await connect).connection.host, (await connect).connection.name)
    } catch (err) {
        console.log(err)
        process.exit(1)

    }
}

export default connectDb