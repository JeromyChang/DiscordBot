const passport = require("passport");
var DiscordStrategy = require("passport-discord").Strategy;
const { clientId, clientSecret} = require("../../../config.json"); 
passport.serializeUser((user,done) =>{
    done(null, user.id);
})

passport.use(
    new DiscordStrategy({
        clientID: clientId,
        clientSecret: 'clQPD6t2_d1epSEHVZ3izhZF1ZSzIgQ5',
        callbackURL: 'http://localhost:4000/auth/discord/callback',
        scope: ["bot", "identify"]
    },
    async (accessToken, regreshToken, profile, done) =>{
        done(null, profile);
    })
)