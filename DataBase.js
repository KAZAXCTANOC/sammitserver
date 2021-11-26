const Visitor = require('./Visitor');

const Pool = require('pg').Pool
const db  = new Pool({
    connectionLimit : 1000,
    user: 'postgres',
    host: 'localhost',
    database: 'SammitDB',
    password: 'admin',
    port: 5432,
})
db.connect();

async function createEvent(Event) {
    try {
        await db.query(`INSERT INTO public.event(name, date, description, status) VALUES ('${Event.name}', '${Event.date}', '${Event.description}', '${Event.status}')`)
        return 200
    }
    catch (e) {
        console.log(e)
        return 500
    }
}

async function createVisitor(Visitor){
    try {
        await db.query(`INSERT INTO public.visitor(name, surname, lastname, birthday, sex, phone, adress) VALUES ('${Visitor.name}', '${Visitor.surname}', '${Visitor.lastname}', '${Visitor.birthday}', '${Visitor.sex}', '${Visitor.phone}', '${Visitor.adress}');`)
        return 200
    }
    catch (e) {
        console.log(e)
        return 500
    }
}

async function updateEvent(Id, Event) {
    try {
        await db.query(`UPDATE public.event SET name='${Event.name}', date='${Event.date}', description='${Event.description}', status='${Event.status}' WHERE id = ${Id};`)
        return 200
    }
    catch (e) {
        console.log(e)
        return 500
    }
}

async function updateVisitor(Id,Visitor) {
    try {
        await db.query(`UPDATE public.visitor SET name='${Visitor.name}', surname='${Visitor.surname}', lastname='${Visitor.lastname}', birthday='${Visitor.birthday}', sex='${Visitor.sex}', phone='${Visitor.phone}', adress='${Visitor.adress}' WHERE Id = '${Id}';`)
        return 200
    }
    catch (e) {
        console.log(e)
        return 500;
    }
}

async function selectVisitor(visitorId){
    try {
        let Visitor = await db.query(`SELECT id, name, surname, lastname, birthday, sex, phone, adress FROM public.visitor WHERE id = '${visitorId}'`)
        return Visitor.rows;
    }
    catch (e) {
        console.log(e)
        return 500
    }
}

async function selectAllVisitor(){
    try {
        let visitors = await db.query("SELECT id, name, surname, lastname, birthday, sex, phone, adress FROM public.visitor ")
        return visitors.rows;
    }
    catch (e) {
        console.log(e)
        return 500
    }
}

async function createParticipantsEvent(idevent, idvisitor) {
    try {
        await db.query(`INSERT INTO public.participantsevent(idevent, idvisitor) VALUES ('${idevent}', '${idvisitor}');`);
        return 200
    }
    catch (e) {
        console.log(e)
        return 500
    }
}

async function getVisitorFromEvent(idevent) {
    try {
        let visitors = await db.query(`SELECT * FROM public.participantsevent WHERE idevent = '${idevent}'`)
        return visitors.rows;
    }
    catch (e) {
        console.log(e)
        return 500;
    }
}

async function getParticipantsEvent(){
    try {
        let participantsevents = await db.query("SELECT * FROM public.participantsevent");
        return participantsevents.rows;
    }
    catch (e) {
        console.log(e)
        return 500;
    }
}

async function deleteParticipants(idevent,idvisitor){
    try {
        await db.query(`DELETE FROM public.participantsevent WHERE idevent='${idevent}' AND idvisitor = '${idvisitor}'`)
        return 200;
    }
    catch (e) {
        console.log(e)
        return 500;
    }
}

async function closeEvent(idevent){
    try {
        await db.query(`UPDATE public.event SET status='Завершено'WHERE Id='${idevent}'`)
        return 200;
    }
    catch (e) {
        console.log(e)
        return 500;
    }
}

async function selectEvents(id) {
    try {
        if (id == undefined) {
            let table = await db.query(`SELECT * FROM public.event`)
            return table.rows;
        }
        else {
            let table = await db.query(`SELECT * FROM public.event WHERE Id='${id}'`)
            return table.rows;
        }
    }
    catch (e) {
        console.log(e)
        return 500;
    }
}

async function selectEmptyEvents() {
    try {
        let res = await db.query("SELECT event.id FROM public.event WHERE event.id NOT IN (SELECT event.id FROM public.participantsevent, public.event WHERE event.id = participantsevent.idevent GROUP BY event.id)\n")
        return res.rows;
    }
    catch (e) {
        console.log(e)
        return 500;
    }
}

async function deleteEvent(idEvent) {
    try {
        await db.query(`DELETE FROM public.event WHERE id = '${idEvent}'`)
        return 200;
    }
    catch (e) {
        console.log(e)
        return 500;
    }
}

async function getStatistic(){
    try {
        let count = await db.query(`SELECT COUNT(*) FROM visitor`)
        return count.rows;
    }
    catch (e) {
        console.log(e)
        return 500;
    }
}

module.exports = {
    CreateEvent: createEvent,
    CreateVisitor: createVisitor,
    UpdateEvent: updateEvent,
    SelectVisitor: selectVisitor,
    CreateParticipantsEvent: createParticipantsEvent,
    GetVisitorFromEvent: getVisitorFromEvent,
    UpdateVisitor: updateVisitor,
    SelectEvents: selectEvents,
    SelectAllVisitor: selectAllVisitor,
    GetParticipantsEvent: getParticipantsEvent,
    DeleteParticipants: deleteParticipants,
    CloseEvent: closeEvent,
    SelectEmptyEvents: selectEmptyEvents,
    DeleteEvent: deleteEvent,
    GetStatistic: getStatistic,
}

