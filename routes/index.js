import express from "express";
import { deleteComment, getComment, getCommentById, saveComment, updateComment } from "../controller/comentController.js";
import { getUser, login, register } from "../controller/userController.js";

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
    res.render('ados')
});
router.get('/ainsel', (req, res) => {
    res.render('/ainsel')
});
router.get('/allowsand', (req, res) => {
    res.render('/alloysand')
});
router.get('/alphaace', (req, res) => {
    res.render('alphaace')
});
router.get('/amore', (req, res) => {
    res.render('amore')
});
router.get('/announcement', (req, res) => {
    res.render('announcement')
});
router.get('/announcementa', (req, res) => {
    res.render('announcementa')
});
router.get('/announcementb', (req, res) => {
    res.render('announcementb')
});
router.get('/announcementc', (req, res) => {
    res.render('announcementc')
});
router.get('/anotherapple', (req, res) => {
    res.render('anotherapple')
});
router.get('/ashleyparade', (req, res) => {
    res.render('ashleyparade')
});
router.get('/blankslate', (req, res) => {
    res.render('blankslate')
});
router.get('/bloatedworm', (req, res) => {
    res.render('bloatedworm')
});
router.get('/boabob', (req, res) => {
    res.render('boabob')
});
router.get('/bourbon', (req, res) => {
    res.render('bourbon')
});
router.get('/bread', (req, res) => {
    res.render('bread')
});
router.get('/caenisius', (req, res) => {
    res.render('caenisius')
});
router.get('/chibimalder', (req, res) => {
    res.render('chibimalder')
});
router.get('/chrome', (req, res) => {
    res.render('chrome')
});
router.get('/cowline', (req, res) => {
    res.render('cowline')
});
router.get('/diamondback', (req, res) => {
    res.render('diamondback')
});
router.get('/dudua', (req, res) => {
    res.render('dudua')
});
router.get('/erstes', (req, res) => {
    res.render('erstes')
});
router.get('/eternalpurity', (req, res) => {
    res.render('eternalpurity')
});
router.get('/fakellama', (req, res) => {
    res.render('fakellama')
});
router.get('/fannedcan', (req, res) => {
    res.render('fannedcan')
});
router.get('/femur', (req, res) => {
    res.render('femur')
});
router.get('/flake', (req, res) => {
    res.render('flake')
});
router.get('/flappingbeaver', (req, res) => {
    res.render('flappingbeaver')
});
router.get('/gremlin', (req, res) => {
    res.render('gremlin')
});
router.get('/greyblue', (req, res) => {
    res.render('greyblue')
});
router.get('/guide', (req, res) => {
    res.render('guide')
});
router.get('/guidea', (req, res) => {
    res.render('guidea')
});
router.get('/guideb', (req, res) => {
    res.render('guideb')
});
router.get('/guidePOST1', (req, res) => {
    res.render('guidePOST1')
});
router.get('/guidePOST2', (req, res) => {
    res.render('guidePOST2')
});
router.get('/guidePOST3', (req, res) => {
    res.render('guidePOST3')
});
router.get('/guidePOST4', (req, res) => {
    res.render('guidePOST4')
});
router.get('/guidePOST1a', (req, res) => {
    res.render('guidePOST1a')
});
router.get('/guidePOST2a', (req, res) => {
    res.render('guidePOST2a')
});
router.get('/guidePOST3a', (req, res) => {
    res.render('guidePOST3a')
});
router.get('/guidePOST4a', (req, res) => {
    res.render('guidePOST4a')
});
router.get('/guidePOST1b', (req, res) => {
    res.render('guidePOST1b')
});
router.get('/guidePOST2b', (req, res) => {
    res.render('guidePOST2b')
});
router.get('/guidePOST3', (req, res) => {
    res.render('guidePOST3b')
});
router.get('/guidePOST4', (req, res) => {
    res.render('guidePOST4b')
});
router.get('/halycon', (req, res) => {
    res.render('halycon')
});
router.get('/hardfeet', (req, res) => {
    res.render('hardfeet')
});
router.get('/hellabruh', (req, res) => {
    res.render('hellabruh')
});
router.get('/hexedfinger', (req, res) => {
    res.render('hexedfinger')
});
router.get('/index', (req, res) => {
    res.render('index')
});
router.get('/izayona', (req, res) => {
    res.render('izayona')
});
router.get('/jasonboat', (req, res) => {
    res.render('jasonboat')
});
router.get('/kamikaze', (req, res) => {
    res.render('kamikaze')
});
router.get('/kimkim', (req, res) => {
    res.render('kimkim')
});
router.get('/kkmudaw', (req, res) => {
    res.render('kkmudaw')
});
router.get('/kriseter', (req, res) => {
    res.render('kriseter')
});
router.get('/lumiere', (req, res) => {
    res.render('lumiere')
});
router.get('/maintenance', (req, res) => {
    res.render('maintenance')
});
router.get('/maintenancea', (req, res) => {
    res.render('maintenancea')
});
router.get('/maintenanceb', (req, res) => {
    res.render('maintenanceb')
});
router.get('/maintenancePOST1', (req, res) => {
    res.render('maintenancePOST1')
});
router.get('/maintenancePOST2', (req, res) => {
    res.render('maintenancePOST2')
});
router.get('/maintenancePOST1a', (req, res) => {
    res.render('maintenancePOST1')
});
router.get('/maintenancePOST2a', (req, res) => {
    res.render('maintenancePOST2')
});
router.get('/maintenancePOST1b', (req, res) => {
    res.render('maintenancePOST1')
});
router.get('/maintenancePOST2b', (req, res) => {
    res.render('maintenancePOST2')
});
router.get('/mao', (req, res) => {
    res.render('mao')
});
router.get('/matchmaking', (req, res) => {
    res.render('matchmaking')
});
router.get('/matchmakinga', (req, res) => {
    res.render('matchmakinga')
});
router.get('/matchmakingb', (req, res) => {
    res.render('matchmaking')
});
router.get('/matchPOST1', (req, res) => {
    res.render('matchPOST1')
});
router.get('/matchPOST2', (req, res) => {
    res.render('matchPOST2')
});
router.get('/matchPOST1a', (req, res) => {
    res.render('matchPOST1')
});
router.get('/matchPOST2a', (req, res) => {
    res.render('matchPOST2')
});
router.get('/matchPOST1b', (req, res) => {
    res.render('matchPOST1')
});
router.get('/matchPOST2b', (req, res) => {
    res.render('matchPOST2')
});
router.get('/maximillion', (req, res) => {
    res.render('maximillion')
});
router.get('/mkmaid', (req, res) => {
    res.render('mkmaid')
});
router.get('/Mobilelegends', (req, res) => {
    res.render('Mobilelegends')
});
router.get('/Mobilelegendsa', (req, res) => {
    res.render('Mobilelegends')
});
router.get('/Mobilelegendsb', (req, res) => {
    res.render('Mobilelegends')
});
router.get('/morvinhead', (req, res) => {
    res.render('morvinhead')
});
router.get('/MPL', (req, res) => {
    res.render('MPL')
});
router.get('/MPLa', (req, res) => {
    res.render('MPLa')
});
router.get('/MPLb', (req, res) => {
    res.render('MPLb')
});
router.get('/MPLpost1', (req, res) => {
    res.render('MPLpost1')
});
router.get('/MPLpost2', (req, res) => {
    res.render('MPLpost2')
});
router.get('/MPLpost3', (req, res) => {
    res.render('MPLpost3')
});
router.get('/MPLpost4', (req, res) => {
    res.render('MPLpost4')
});
router.get('/MPLpost1a', (req, res) => {
    res.render('MPLpost1a')
});
router.get('/MPLpost2a', (req, res) => {
    res.render('MPLpost2a')
});
router.get('/MPLpost3a', (req, res) => {
    res.render('MPLpost3a   ')
});
router.get('/MPLpost4a', (req, res) => {
    res.render('MPLpost4a')
});
router.get('/MPLpost1b', (req, res) => {
    res.render('MPLpost1b')
});
router.get('/MPLpost2b', (req, res) => {
    res.render('MPLpost2b')
});
router.get('/MPLpost3b', (req, res) => {
    res.render('MPLpost3b')
});
router.get('/MPLpost4b', (req, res) => {
    res.render('MPLpost4b')
});

router.get('/necove', (req, res) => {
    res.render('necove')
});
router.get('/nimda', (req, res) => {
    res.render('nimda')
});
router.get('/notsob', (req, res) => {
    res.render('notsobe')
});
router.get('/okami', (req, res) => {
    res.render('okami')
});
router.get('/postupdatePOST1', (req, res) => {
    res.render('postupdatePOST1')
});
router.get('/postupdatePOST2', (req, res) => {
    res.render('postupdatePOST2')
});
router.get('/postupdatePOST3', (req, res) => {
    res.render('postupdatePOST3')
});
router.get('/postupdatePOST4', (req, res) => {
    res.render('postupdatePOST4')
});
router.get('/postupdatePOST5', (req, res) => {
    res.render('postupdatePOST5')
});
router.get('/postupdatePOST6', (req, res) => {
    res.render('postupdatePOST6')
});
router.get('/postupdatePOST1a', (req, res) => {
    res.render('postupdatePOST1a')
});
router.get('/postupdatePOST2a', (req, res) => {
    res.render('postupdatePOST2a')
});
router.get('/postupdatePOST3a', (req, res) => {
    res.render('postupdatePOST3a')
});
router.get('/postupdatePOST4a', (req, res) => {
    res.render('postupdatePOST4a')
});
router.get('/postupdatePOST5a', (req, res) => {
    res.render('postupdatePOST5a')
});
router.get('/postupdatePOST6a', (req, res) => {
    res.render('postupdatePOST6a')
});
router.get('/postupdatePOST1b', (req, res) => {
    res.render('postupdatePOST1b')
});
router.get('/postupdatePOST2b', (req, res) => {
    res.render('postupdatePOST2b')
});
router.get('/postupdatePOST3b', (req, res) => {
    res.render('postupdatePOST3b')
});
router.get('/postupdatePOST4b', (req, res) => {
    res.render('postupdatePOST4b')
});
router.get('/postupdatePOST5b', (req, res) => {
    res.render('postupdatePOST5b')
});
router.get('/postupdatePOST6b', (req, res) => {
    res.render('postupdatePOST6b')
});
router.get('/PUBG', (req, res) => {
    res.render('PUBG')
});
router.get('/PUBGa', (req, res) => {
    res.render('PUBGa')
});
router.get('/PUBGb', (req, res) => {
    res.render('PUBGb')
});
router.get('/quantum', (req, res) => {
    res.render('quantum')
});
router.get('/ramirice', (req, res) => {
    res.render('ramirice')
});
router.get('/recruit', (req, res) => {
    res.render('recruit')
});
router.get('/recruita', (req, res) => {
    res.render('recruita')
});
router.get('/recruitb', (req, res) => {
    res.render('recruitb')
});
router.get('/recruitPOST1', (req, res) => {
    res.render('recruitP1')
});
router.get('/recruitPOST2', (req, res) => {
    res.render('recruitPOST2')
});
router.get('/recruitPOST3', (req, res) => {
    res.render('recruitPOST3')
});
router.get('/recruitPOST4', (req, res) => {
    res.render('recruitPOST4')
});
router.get('/recruitPOST1', (req, res) => {
    res.render('recruitP1a')
});
router.get('/recruitPOST2a', (req, res) => {
    res.render('recruitPOST2a')
});
router.get('/recruitPOST3a', (req, res) => {
    res.render('recruitPOST3a')
});
router.get('/recruitPOST4a', (req, res) => {
    res.render('recruitPOST4a')
});
router.get('/recruitPOST1b', (req, res) => {
    res.render('recruitP1b')
});
router.get('/recruitPOST2b', (req, res) => {
    res.render('recruitPOST2b')
});
router.get('/recruitPOST3b', (req, res) => {
    res.render('recruitPOST3b')
});
router.get('/recruitPOST4b', (req, res) => {
    res.render('recruitPOST4b')
});
router.get('/rhea', (req, res) => {
    res.render('rhea')
});
router.get('/rizvi', (req, res) => {
    res.render('rizvi')
});
router.get('/scam', (req, res) => {
    res.render('scam')
});
router.get('/scama', (req, res) => {
    res.render('scam')
});
router.get('/scamb', (req, res) => {
    res.render('scam')
});
router.get('/scamPOST1', (req, res) => {
    res.render('scamPOST1')
});
router.get('/scamPOST2', (req, res) => {
    res.render('scamPOST2')
});
router.get('/scamPOST3', (req, res) => {
    res.render('scamPOST3')
});
router.get('/scamPOST1a', (req, res) => {
    res.render('scamPOST1')
});
router.get('/scamPOST2a', (req, res) => {
    res.render('scamPOST2')
});
router.get('/scamPOST3a', (req, res) => {
    res.render('scamPOST3')
});
router.get('/scamPOST1b', (req, res) => {
    res.render('scamPOST1')
});
router.get('/scamPOST2b', (req, res) => {
    res.render('scamPOST2')
});
router.get('/scamPOST3b', (req, res) => {
    res.render('scamPOST3')
});
router.get('/spilledcoconut', (req, res) => {
    res.render('')
});
router.get('/tech', (req, res) => {
    res.render('tech')
});
router.get('/techa', (req, res) => {
    res.render('tech')
});
router.get('/techb', (req, res) => {
    res.render('tech')
});
router.get('/techPOST1', (req, res) => {
    res.render('techPOST1')
});
router.get('/techPOST2', (req, res) => {
    res.render('techPOST2')
});
router.get('/techPOST1a', (req, res) => {
    res.render('techPOST1')
});
router.get('/techPOST2a', (req, res) => {
    res.render('techPOST2')
});
router.get('/techPOST1b', (req, res) => {
    res.render('techPOST1')
});
router.get('/techPOST2b', (req, res) => {
    res.render('techPOST2b')
});
router.get('/temi', (req, res) => {
    res.render('temi')
});
router.get('/thal', (req, res) => {
    res.render('thal')
});
router.get('/threada', (req, res) => {
    res.render('threada')
});
router.get('/threadb', (req, res) => {
    res.render('threadb')
});
router.get('/twilight', (req, res) => {
    res.render('twilight')
});
router.get('/twinklingbird', (req, res) => {
    res.render('twinklingbird')
});
router.get('/undyingfish', (req, res) => {
    res.render('undyingfish')
});
router.get('/updatepatcha', (req, res) => {
    res.render('updatepatcha')
});
router.get('/updatepatchb', (req, res) => {
    res.render('updatepatchb')
});
router.get('/updatePUBG', (req, res) => {
    res.render('updatePUBG')
});
router.get('/updatePUBGa', (req, res) => {
    res.render('updatePUBGa')
});
router.get('/updatePUBGb', (req, res) => {
    res.render('updatePUBgb')
});
router.get('/updtPUBGpost1', (req, res) => {
    res.render('updtPUBGpost1')
});
router.get('/updtPUBGpost2', (req, res) => {
    res.render('updtPUBGpost2')
});
router.get('/updtPUBGpost3', (req, res) => {
    res.render('updtPUBGpost3')
});
router.get('/updtPUBGpost4', (req, res) => {
    res.render('updtPUBGpost4')
});
router.get('/updtPUBGpost1a', (req, res) => {
    res.render('updtPUBGpost1a')
});
router.get('/updtPUBGpost2a', (req, res) => {
    res.render('updtPUBGpost2a')
});
router.get('/updtPUBGpost3a', (req, res) => {
    res.render('updtPUBGpost3a')
});
router.get('/updtPUBGpost4a', (req, res) => {
    res.render('updtPUBGpost4a')
});
router.get('/updtPUBGpost1b', (req, res) => {
    res.render('updtPUBGpost1b')
});
router.get('/updtPUBGpost2b', (req, res) => {
    res.render('updtPUBGpost2b')
});
router.get('/updtPUBGpost3b', (req, res) => {
    res.render('updtPUBGpost3b')
});
router.get('/updtPUBGpost4b', (req, res) => {
    res.render('updtPUBGpost4b')
});
router.get('/valmorantmainPOST1', (req, res) => {
    res.render('valmorantmainPOST1')
});
router.get('/valmorantmainPOST1a', (req, res) => {
    res.render('valmorantmainPOST1a')
});
router.get('/valmorantmainPOST1b', (req, res) => {
    res.render('valmorantmainPOST1b')
});
router.get('/Valorant', (req, res) => {
    res.render('Valorant')
});
router.get('/Valoranta', (req, res) => {
    res.render('Valoranta')
});
router.get('/Valorantb', (req, res) => {
    res.render('Valorantb')
});
router.get('/valorantmaint', (req, res) => {
    res.render('valorantmaint')
});
router.get('/valorantmainta', (req, res) => {
    res.render('valorantmaint')
});
router.get('/valorantmaintb', (req, res) => {
    res.render('valorantmaintb')
});
router.get('/windtopics', (req, res) => {
    res.render('windtopics')
});
router.get('/xcraft', (req, res) => {
    res.render('xcraft')
});
router.get('/zone', (req, res) => {
    res.render('zone')
});
//User Routing
router.get('/user', getUser);
router.post('/register', register);
router.post('/login', login);

//Comment Routing
router.get('/comment', getComment);
router.get('/comment/:id', getCommentById);
router.post('/comment', saveComment);
router.patch('/comment/:id', updateComment);
router.delete('/comment/:id', deleteComment);


export default router;