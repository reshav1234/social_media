// to secure API endpoints
require('dotenv').config()
const User = require('../models/users.model')
const Token = require('../models')
const JwtStrategy = require('passport-jwt').Strategy, // Extact Jwt from incomming request
    ExtractJwt = require('passport-jwt').ExtractJwt // Method to extract Jwt
const passport = require('passport')
const opts = {}
opts.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken()
opts.secretOrKey = process.env.SECRET
const jwt = require('jsonwebtoken')


passport.use(
    new JwtStrategy(opts, async function(jwt_payload, done){
        try{
            const user = await User.findOne({email:jwt_payload.email})

            if(user){
                const refrestTokenFromDB = await Token.findOne({
                    user:user._id,
                })

                if(!refrestTokenFromDB){
                    return done(null, false)
                }

                const refreshPayload = jwt.verify(
                    refreshTokenFromDB.refreshToken,
                    process.env.REFRESH_SECRET
                )

                if(refreshPayload.email !== jwt_payload.email){
                    return done(null, false)
                }
            }
        }catch(err){
            return done(err, false)
        }
    })
)


