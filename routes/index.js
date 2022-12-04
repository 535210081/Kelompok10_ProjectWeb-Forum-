import express from "express";
import { deleteComment, getComment, getCommentById, saveComment, updateComment } from "../controller/comentController.js";
import { getUser, login, register } from "../controller/userController.js";
import { authUser } from "../middleware/auth.js";

const router = express();

router.get('/homepage', (req, res) => {
    res.render('pages/homepage')
});
router.get('/thread', (req, res) => {
    res.render('pages/thread')
});
router.get('/updatepatch', (req, res) => {
    res.render('pages/updatepatch')
});
router.get('/postupdatePOST1', (req, res) => {
    res.render('pages/postupdatePOST1')
});
router.get('/1293', (req, res) => {
    res.render('pages/1293')
});
router.get('/ABCD', (req, res) => {
    res.render('pages/ABCD')
});
router.get('/admin', (req, res) => {
    res.render('pages/admin')
});
router.get('/ados', (req, res) => {
    res.render('pages/ados')
});
router.get('/ainsel', (req, res) => {
    res.render('pages/ainsel')
});
router.get('/allowsand', (req, res) => {
    res.render('pages/alloysand')
});
router.get('/alphaace', (req, res) => {
    res.render('pages/alphaace')
});
router.get('/amore', (req, res) => {
    res.render('pages/amore')
});
router.get('/announcement', (req, res) => {
    res.render('pages/announcement')
});
router.get('/announcementa', (req, res) => {
    res.render('pages/announcementa')
});
router.get('/announcementb', (req, res) => {
    res.render('pages/announcementb')
});
router.get('/announcementc', (req, res) => {
    res.render('pages/announcementc')
});
router.get('/anotherapple', (req, res) => {
    res.render('pages/anotherapple')
});
router.get('/ashleyparade', (req, res) => {
    res.render('pages/ashleyparade')
});
router.get('/blankslate', (req, res) => {
    res.render('pages/blankslate')
});
router.get('/bloatedworm', (req, res) => {
    res.render('pages/bloatedworm')
});
router.get('/boabob', (req, res) => {
    res.render('pages/boabob')
});
router.get('/bourbon', (req, res) => {
    res.render('pages/bourbon')
});
router.get('/bread', (req, res) => {
    res.render('pages/bread')
});
router.get('/caenisius', (req, res) => {
    res.render('pages/caenisius')
});
router.get('/chibimalder', (req, res) => {
    res.render('pages/chibimalder')
});
router.get('/chrome', (req, res) => {
    res.render('pages/chrome')
});
router.get('/cowline', (req, res) => {
    res.render('pages/cowline')
});
router.get('/diamondback', (req, res) => {
    res.render('pages/diamondback')
});
router.get('/dudua', (req, res) => {
    res.render('pages/dudua')
});
router.get('/erstes', (req, res) => {
    res.render('pages/erstes')
});
router.get('/eternalpurity', (req, res) => {
    res.render('pages/eternalpurity')
});
router.get('/fakellama', (req, res) => {
    res.render('pages/fakellama')
});
router.get('/fannedcan', (req, res) => {
    res.render('pages/fannedcan')
});
router.get('/femur', (req, res) => {
    res.render('pages/femur')
});
router.get('/flake', (req, res) => {
    res.render('pages/flake')
});
router.get('/flappingbeaver', (req, res) => {
    res.render('pages/flappingbeaver')
});
router.get('/gremlin', (req, res) => {
    res.render('pages/gremlin')
});
router.get('/greyblue', (req, res) => {
    res.render('pages/greyblue')
});
router.get('/guide', (req, res) => {
    res.render('pages/guide')
});
router.get('/guidea', (req, res) => {
    res.render('pages/guidea')
});
router.get('/guideb', (req, res) => {
    res.render('pages/guideb')
});
router.get('/guidePOST1', (req, res) => {
    res.render('pages/guidePOST1')
});
router.get('/guidePOST2', (req, res) => {
    res.render('pages/guidePOST2')
});
router.get('/guidePOST3', (req, res) => {
    res.render('pages/guidePOST3')
});
router.get('/guidePOST4', (req, res) => {
    res.render('pages/guidePOST4')
});
router.get('/guidePOST1a', (req, res) => {
    res.render('pages/guidePOST1a')
});
router.get('/guidePOST2a', (req, res) => {
    res.render('pages/guidePOST2a')
});
router.get('/guidePOST3a', (req, res) => {
    res.render('pages/guidePOST3a')
});
router.get('/guidePOST4a', (req, res) => {
    res.render('pages/guidePOST4a')
});
router.get('/guidePOST1b', (req, res) => {
    res.render('pages/guidePOST1b')
});
router.get('/guidePOST2b', (req, res) => {
    res.render('pages/guidePOST2b')
});
router.get('/guidePOST3b', (req, res) => {
    res.render('pages/guidePOST3b')
});
router.get('/guidePOST4b', (req, res) => {
    res.render('pages/guidePOST4b')
});
router.get('/halycon', (req, res) => {
    res.render('pages/halycon')
});
router.get('/hardfeet', (req, res) => {
    res.render('pages/hardfeet')
});
router.get('/hellabruh', (req, res) => {
    res.render('pages/hellabruh')
});
router.get('/hexedfinger', (req, res) => {
    res.render('pages/hexedfinger')
});
router.get('/index', (req, res) => {
    res.render('pages/index')
});
router.get('/izayona', (req, res) => {
    res.render('pages/izayona')
});
router.get('/jasonboat', (req, res) => {
    res.render('pages/jasonboat')
});
router.get('/kamikaze', (req, res) => {
    res.render('pages/kamikaze')
});
router.get('/kimkim', (req, res) => {
    res.render('pages/kimkim')
});
router.get('/kkmudaw', (req, res) => {
    res.render('pages/kkmudaw')
});
router.get('/kriseter', (req, res) => {
    res.render('pages/kriseter')
});
router.get('/lumiere', (req, res) => {
    res.render('pages/lumiere')
});
router.get('/maintenance', (req, res) => {
    res.render('pages/maintenance')
});
router.get('/maintenancea', (req, res) => {
    res.render('pages/maintenancea')
});
router.get('/maintenanceb', (req, res) => {
    res.render('pages/maintenanceb')
});
router.get('/maintenancePOST1', (req, res) => {
    res.render('pages/maintenancePOST1')
});
router.get('/maintenancePOST2', (req, res) => {
    res.render('pages/maintenancePOST2')
});
router.get('/maintenancePOST1a', (req, res) => {
    res.render('pages/maintenancePOST1a')
});
router.get('/maintenancePOST2a', (req, res) => {
    res.render('pages/maintenancePOST2a')
});
router.get('/maintenancePOST1b', (req, res) => {
    res.render('pages/maintenancePOST1b')
});
router.get('/maintenancePOST2b', (req, res) => {
    res.render('pages/maintenancePOST2b')
});
router.get('/mao', (req, res) => {
    res.render('pages/mao')
});
router.get('/matchmaking', (req, res) => {
    res.render('pages/matchmaking')
});
router.get('/matchmakinga', (req, res) => {
    res.render('pages/matchmakinga')
});
router.get('/matchmakingb', (req, res) => {
    res.render('pages/matchmakingb')
});
router.get('/matchPOST1', (req, res) => {
    res.render('pages/matchPOST1')
});
router.get('/matchPOST2', (req, res) => {
    res.render('pages/matchPOST2')
});
router.get('/matchPOST1a', (req, res) => {
    res.render('pages/matchPOST1a')
});
router.get('/matchPOST2a', (req, res) => {
    res.render('pages/matchPOST2a')
});
router.get('/matchPOST1b', (req, res) => {
    res.render('pages/matchPOST1b')
});
router.get('/matchPOST2b', (req, res) => {
    res.render('pages/atchPOST2b')
});
router.get('/maximillion', (req, res) => {
    res.render('pages/maximillion')
});
router.get('/mkmaid', (req, res) => {
    res.render('pages/mkmaid')
});
router.get('/Mobilelegends', (req, res) => {
    res.render('pages/Mobilelegends')
});
router.get('/Mobilelegendsa', (req, res) => {
    res.render('pages/Mobilelegends')
});
router.get('/Mobilelegendsb', (req, res) => {
    res.render('pages/Mobilelegends')
});
router.get('/morvinhead', (req, res) => {
    res.render('pages/morvinhead')
});
router.get('/MPL', (req, res) => {
    res.render('pages/MPL')
});
router.get('/MPLa', (req, res) => {
    res.render('pages/MPLa')
});
router.get('/MPLb', (req, res) => {
    res.render('pages/MPLb')
});
router.get('/MPLpost1', (req, res) => {
    res.render('pages/MPLpost1')
});
router.get('/MPLpost2', (req, res) => {
    res.render('pages/MPLpost2')
});
router.get('/MPLpost3', (req, res) => {
    res.render('pages/MPLpost3')
});
router.get('/MPLpost4', (req, res) => {
    res.render('pages/MPLpost4')
});
router.get('/MPLpost1a', (req, res) => {
    res.render('pages/MPLpost1a')
});
router.get('/MPLpost2a', (req, res) => {
    res.render('pages/MPLpost2a')
});
router.get('/MPLpost3a', (req, res) => {
    res.render('pages/MPLpost3a   ')
});
router.get('/MPLpost4a', (req, res) => {
    res.render('pages/MPLpost4a')
});
router.get('/MPLpost1b', (req, res) => {
    res.render('pages/MPLpost1b')
});
router.get('/MPLpost2b', (req, res) => {
    res.render('pages/MPLpost2b')
});
router.get('/MPLpost3b', (req, res) => {
    res.render('pages/MPLpost3b')
});
router.get('/MPLpost4b', (req, res) => {
    res.render('pages/MPLpost4b')
});

router.get('/necove', (req, res) => {
    res.render('pages/necove')
});
router.get('/nimda', (req, res) => {
    res.render('pages/nimda')
});
router.get('/notsob', (req, res) => {
    res.render('pages/notsob')
});
router.get('/okami', (req, res) => {
    res.render('pages/okami')
});
router.get('/postupdatePOST1', (req, res) => {
    res.render('pages/postupdatePOST1')
});
router.get('/postupdatePOST2', (req, res) => {
    res.render('pages/postupdatePOST2')
});
router.get('/postupdatePOST3', (req, res) => {
    res.render('pages/postupdatePOST3')
});
router.get('/postupdatePOST4', (req, res) => {
    res.render('pages/postupdatePOST4')
});
router.get('/postupdatePOST5', (req, res) => {
    res.render('pages/postupdatePOST5')
});
router.get('/postupdatePOST6', (req, res) => {
    res.render('pages/postupdatePOST6')
});
router.get('/postupdatePOST1a', (req, res) => {
    res.render('pages/postupdatePOST1a')
});
router.get('/postupdatePOST2a', (req, res) => {
    res.render('pages/postupdatePOST2a')
});
router.get('/postupdatePOST3a', (req, res) => {
    res.render('pages/postupdatePOST3a')
});
router.get('/postupdatePOST4a', (req, res) => {
    res.render('pages/postupdatePOST4a')
});
router.get('/postupdatePOST5a', (req, res) => {
    res.render('pages/postupdatePOST5a')
});
router.get('/postupdatePOST6a', (req, res) => {
    res.render('pages/postupdatePOST6a')
});
router.get('/postupdatePOST1b', (req, res) => {
    res.render('pages/postupdatePOST1b')
});
router.get('/postupdatePOST2b', (req, res) => {
    res.render('pages/postupdatePOST2b')
});
router.get('/postupdatePOST3b', (req, res) => {
    res.render('pages/postupdatePOST3b')
});
router.get('/postupdatePOST4b', (req, res) => {
    res.render('pages/postupdatePOST4b')
});
router.get('/postupdatePOST5b', (req, res) => {
    res.render('pages/postupdatePOST5b')
});
router.get('/postupdatePOST6b', (req, res) => {
    res.render('pages/postupdatePOST6b')
});
router.get('/PUBG', (req, res) => {
    res.render('pages/PUBG')
});
router.get('/PUBGa', (req, res) => {
    res.render('pages/PUBGa')
});
router.get('/PUBGb', (req, res) => {
    res.render('pages/PUBGb')
});
router.get('/quantum', (req, res) => {
    res.render('pages/quantum')
});
router.get('/ramirice', (req, res) => {
    res.render('pages/ramirice')
});
router.get('/recruit', (req, res) => {
    res.render('pages/recruit')
});
router.get('/recruita', (req, res) => {
    res.render('pages/recruita')
});
router.get('/recruitb', (req, res) => {
    res.render('pages/recruitb')
});
router.get('/recruitPOST1', (req, res) => {
    res.render('pages/recruitP1')
});
router.get('/recruitPOST2', (req, res) => {
    res.render('pages/recruitPOST2')
});
router.get('/recruitPOST3', (req, res) => {
    res.render('pages/recruitPOST3')
});
router.get('/recruitPOST4', (req, res) => {
    res.render('pages/recruitPOST4')
});
router.get('/recruitPOST1a', (req, res) => {
    res.render('pages/recruitPOST1a')
});
router.get('/recruitPOST2a', (req, res) => {
    res.render('pages/recruitPOST2a')
});
router.get('/recruitPOST3a', (req, res) => {
    res.render('pages/recruitPOST3a')
});
router.get('/recruitPOST4a', (req, res) => {
    res.render('pages/recruitPOST4a')
});
router.get('/recruitPOST1b', (req, res) => {
    res.render('pages/recruitP1b')
});
router.get('/recruitPOST2b', (req, res) => {
    res.render('pages/recruitPOST2b')
});
router.get('/recruitPOST3b', (req, res) => {
    res.render('pages/recruitPOST3b')
});
router.get('/recruitPOST4b', (req, res) => {
    res.render('pages/recruitPOST4b')
});
router.get('/rhea', (req, res) => {
    res.render('pages/rhea')
});
router.get('/rizvi', (req, res) => {
    res.render('pages/rizvi')
});
router.get('/scam', (req, res) => {
    res.render('pages/scam')
});
router.get('/scama', (req, res) => {
    res.render('pages/scam')
});
router.get('/scamb', (req, res) => {
    res.render('pages/scam')
});
router.get('/scamPOST1', (req, res) => {
    res.render('pages/scamPOST1')
});
router.get('/scamPOST2', (req, res) => {
    res.render('pages/scamPOST2')
});
router.get('/scamPOST3', (req, res) => {
    res.render('pages/scamPOST3')
});
router.get('/scamPOST1a', (req, res) => {
    res.render('pages/scamPOST1')
});
router.get('/scamPOST2a', (req, res) => {
    res.render('pages/scamPOST2')
});
router.get('/scamPOST3a', (req, res) => {
    res.render('pages/scamPOST3a')
});
router.get('/scamPOST1b', (req, res) => {
    res.render('pages/scamPOST1b')
});
router.get('/scamPOST2b', (req, res) => {
    res.render('pages/scamPOST2b')
});
router.get('/scamPOST3b', (req, res) => {
    res.render('pages/scamPOST3b')
});
router.get('/spilledcoconut', (req, res) => {
    res.render('pages/spillercoconut')
});
router.get('/tech', (req, res) => {
    res.render('pages/tech')
});
router.get('/techa', (req, res) => {
    res.render('pages/techa')
});
router.get('/techb', (req, res) => {
    res.render('pages/techb')
});
router.get('/techPOST1', (req, res) => {
    res.render('pages/techPOST1')
});
router.get('/techPOST2', (req, res) => {
    res.render('pages/techPOST2')
});
router.get('/techPOST1a', (req, res) => {
    res.render('pages/techPOST1a')
});
router.get('/techPOST2a', (req, res) => {
    res.render('pages/techPOST2a')
});
router.get('/techPOST1b', (req, res) => {
    res.render('pages/techPOST1b')
});
router.get('/techPOST2b', (req, res) => {
    res.render('pages/techPOST2b')
});
router.get('/temi', (req, res) => {
    res.render('pages/temi')
});
router.get('/thal', (req, res) => {
    res.render('pages/thal')
});
router.get('/threada', (req, res) => {
    res.render('pages/threada')
});
router.get('/threadb', (req, res) => {
    res.render('pages/threadb')
});
router.get('/twilight', (req, res) => {
    res.render('pages/twilight')
});
router.get('/twinklingbird', (req, res) => {
    res.render('pages/twinklingbird')
});
router.get('/undyingfish', (req, res) => {
    res.render('pages/undyingfish')
});
router.get('/updatepatcha', (req, res) => {
    res.render('pages/updatepatcha')
});
router.get('/updatepatchb', (req, res) => {
    res.render('pages/updatepatchb')
});
router.get('/updatePUBG', (req, res) => {
    res.render('pages/updatePUBG')
});
router.get('/updatePUBGa', (req, res) => {
    res.render('pages/updatePUBGa')
});
router.get('/updatePUBGb', (req, res) => {
    res.render('pages/updatePUBgb')
});
router.get('/updtPUBGpost1', (req, res) => {
    res.render('pages/updtPUBGpost1')
});
router.get('/updtPUBGpost2', (req, res) => {
    res.render('pages/updtPUBGpost2')
});
router.get('/updtPUBGpost3', (req, res) => {
    res.render('pages/updtPUBGpost3')
});
router.get('/updtPUBGpost4', (req, res) => {
    res.render('pages/updtPUBGpost4')
});
router.get('/updtPUBGpost1a', (req, res) => {
    res.render('pages/updtPUBGpost1a')
});
router.get('/updtPUBGpost2a', (req, res) => {
    res.render('pages/updtPUBGpost2a')
});
router.get('/updtPUBGpost3a', (req, res) => {
    res.render('pages/updtPUBGpost3a')
});
router.get('/updtPUBGpost4a', (req, res) => {
    res.render('pages/updtPUBGpost4a')
});
router.get('/updtPUBGpost1b', (req, res) => {
    res.render('pages/updtPUBGpost1b')
});
router.get('/updtPUBGpost2b', (req, res) => {
    res.render('pages/updtPUBGpost2b')
});
router.get('/updtPUBGpost3b', (req, res) => {
    res.render('pages/updtPUBGpost3b')
});
router.get('/updtPUBGpost4b', (req, res) => {
    res.render('pages/updtPUBGpost4b')
});
router.get('/valmorantmainPOST1', (req, res) => {
    res.render('pages/valmorantmainPOST1')
});
router.get('/valmorantmainPOST1a', (req, res) => {
    res.render('pages/valmorantmainPOST1a')
});
router.get('/valmorantmainPOST1b', (req, res) => {
    res.render('pages/valmorantmainPOST1b')
});
router.get('/Valorant', (req, res) => {
    res.render('pages/Valorant')
});
router.get('/Valoranta', (req, res) => {
    res.render('pages/Valoranta')
});
router.get('/Valorantb', (req, res) => {
    res.render('pages/Valorantb')
});
router.get('/valorantmaint', (req, res) => {
    res.render('pages/valorantmaint')
});
router.get('/valorantmainta', (req, res) => {
    res.render('pages/valorantmainta')
});
router.get('/valorantmaintb', (req, res) => {
    res.render('pages/valorantmaintb')
});
router.get('/windtopics', (req, res) => {
    res.render('pages/windtopics')
});
router.get('/xcraft', (req, res) => {
    res.render('pages/xcraft')
});
router.get('/zone', (req, res) => {
    res.render('pages/zone')
});
router.get('/homepage%20', (req, res) => {
    res.render('pages/homepage%20')
});
//User Routing
router.get('/user', getUser);
router.post('/register', register);
router.post('/login', login);

//Comment Routing
router.get('/comment', getComment);
router.get('/comment/:id', getCommentById);
router.post('/comment',  saveComment);
router.patch('/comment/:id', updateComment);
router.delete('/comment/:id', deleteComment);


export default router;