import mongoose, {Schema} from "mongoose";

const checkinSchema = new Schema({
    userId: {
        type: Schema.Types.ObjectId,
        ref: "user",
        unique: true,
        default: null,
        trim: true,
        index: true,
        required: true
    },
    date: {
        type: date,
        default: Date.now(),
        required:true,
        index: true
    },

    mood:{
        type: Number,
        required: true,
        min: 1,
        max: 5
    },
    energy: {
        type: Number,
        required: true,
        min: 1,
        max: 5
    },
    stress: {
        type: Number,
        required: true,
        min: 1,
        max: 5
    },
    focus: {
        type: String,
        enum: ["work", "studies", "family", "health", "social", "other"]
    },
    oneWord: {
        type: String,
        trim: true,
        maxlength: 30,
        default: ""
    },
    journalEntry: {
        type: String,
        trim: true,
        required: true,
        maxLength: 500
    }
}, {timestamps: true});

export const Checkin = mongoose.model("Checkin", checkinSchema);