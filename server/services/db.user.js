import connectDB from "../middlewares/mongodb";
import User from "../models/User";

async function intializeUser( address, nonce ){
    await connectDB();
    address = address.toLowerCase();
    let newUser = new User({ address: address, nonce: nonce });
    return await newUser.save();
}
async function updateNonce( address, nonce ) {
    await connectDB();
    address = address.toLowerCase();
    return await User.findOneAndUpdate({ address: address }, { $set: { nonce: nonce }});
}
async function retriveNonce( address, nonce ) {
    await connectDB();
    address = address.toLowerCase();
    let user = await User.findOne({ address: address }).select({nonce: 1}).lean().exec();
    if( !user ) throw new Error("Cannot find provided user");
    return user.nonce;
}
async function retriveUserBasic( address ){
    await connectDB();
    address = address.toLowerCase();
    let user = await User.findOne({ address: address }).select({_id: 1, address: 1, nonce: 1}).lean().exec();
    if( !user ) throw new Error("Cannot find provided user");
    return user;
}
async function exists( address ){
    await connectDB();
    address = address.toLowerCase();
    return await User.findOne({ address: address });
}

let ServiceUser = {
    intializeUser,
    retriveNonce,
    retriveUserBasic,
    updateNonce,
    exists
};
export default ServiceUser;