import mongoose from 'mongoose';

var userSchema = mongoose.Schema({

	nonce: String,
	address: {
        type: String,
        unique: true
    }

}, { timestamps: { createdAt: 'created_at' } });

userSchema.index({ 
    address: 1
});

export default mongoose.models.User || mongoose.model('User', userSchema);
