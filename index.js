//#region Всякое что создается на один раз
const express = require("express");
const bodyParser = require('body-parser');
const db = require('./DataBase');
const url = require('url');
const Event = require('./Event')
const Visitor = require('./Visitor')

const port = "3002";
const app = express();

app.use(bodyParser.json());
app.use(express.json());
app.use(function (req, res, next) {
    res.setHeader('Content-type', 'text/html');
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET,POST,PUT,DELETE,OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Access-Control-Allow-Headers');
    next();
});
//#endregion

/*
@url
http://localhost:3002/createEvent?name=name&date=date&description=description&status=status
 */
app.post('/createEvent', async function (request, response) {
    try {
        let urlRequest = url.parse(request.url, true)
        let event = new Event(urlRequest.query.name, urlRequest.query.date, urlRequest.query.description, urlRequest.query.status)
        let res = await db.CreateEvent(event)
        response.sendStatus(res)
    }
    catch (e) {
        console.log(e)
        response.sendStatus(500)
    }
});

/*
@url
http://localhost:3002/createVisitor?name=name&surname=surname&lastname=lastname&birthday=birthday&sex=sex&phone=phone&adress=adress
 */
app.post('/createVisitor', async function (request, response) {
    try {
        let urlRequest = url.parse(request.url, true)
        let visitor = new Visitor(urlRequest.query.name,urlRequest.query.surname, urlRequest.query.lastname, urlRequest.query.birthday, urlRequest.query.sex, urlRequest.query.phone, urlRequest.query.adress)
        let res = await db.CreateVisitor(visitor)
        response.sendStatus(res)
    }
    catch (e) {
        console.log(e)
        response.sendStatus(500)
    }
});

/*
http://localhost:3002/updateEvent?name=name1&date=date2&description=description1&status=status1&id=2
 */
app.post('/updateEvent', async function (request, response) {
    try {
        let urlRequest = url.parse(request.url, true)
        let event = new Event(urlRequest.query.name, urlRequest.query.date, urlRequest.query.description, urlRequest.query.status)

        let res = await db.UpdateEvent(urlRequest.query.id, event)
        response.sendStatus(res)
    }
    catch (e) {
        console.log(e)
    }
})


app.post('/createParticipantsEvent', async function (request, response) {
    try {
        let urlRequest = url.parse(request.url, true)
        console.log(`SSSSSSSSSSSSSSSSSS ${urlRequest.query.idevent} ${urlRequest.query.idvisitor}`)
        console.log(request.url);

        await db.CreateParticipantsEvent(parseInt(urlRequest.query.idevent), parseInt(urlRequest.query.idvisitor))
        response.sendStatus(200)
    }
    catch (e) {
        console.log(e)
        response.sendStatus(500)
    }
})


app.get('/getVisitorFromEvent', async function(request, response) {
    try {
        let urlRequest = url.parse(request.url, true)
        response.json(await db.GetVisitorFromEvent(urlRequest.query.idevent))
    }
    catch (e) {
        console.log(e)
        response.sendStatus(500);
    }
})

app.get('/selectEvents', async function(request, response) {
    try {
        let urlRequest = url.parse(request.url, true)
        if (urlRequest.query.id == undefined) {
            response.json(await db.SelectEvents())
        }
        else {
            response.json(await db.SelectEvents(urlRequest.query.id))
        }
    }
    catch (e) {
        console.log(e)
        response.sendStatus(500);
    }
});

app.get('/selectAllVisitor', async function (request, response) {
    try {
        response.json(await db.SelectAllVisitor())
    }
    catch (e) {
        console.log(e)
        response.sendStatus(500)
    }
})

app.get('/getParticipantsEvent', async function(request, response) {
    try {
        response.json(await db.GetParticipantsEvent())
    }
    catch (e) {
        console.log(e)
        response.sendStatus(500)
    }
})

app.get('/selectVisitor', async function(request, response) {
    try {
        let urlRequest = url.parse(request.url, true)
        response.json(await db.SelectVisitor(urlRequest.query.visitorId))
    }
    catch (e) {
        console.log(e)
        response.sendStatus(500)
    }
})

app.post('/deleteParticipants', async function(request,response) {
    try {
        let urlRequest = url.parse(request.url, true)
        response.sendStatus(await db.DeleteParticipants(urlRequest.query.idevent, urlRequest.query.idvisitor))
    }
    catch (e) {
        console.log(e)
        response.sendStatus(500)
    }
})

app.post('/closeEvent', async function(request,response) {
    try {
        let urlRequest = url.parse(request.url, true)
        response.sendStatus(await db.CloseEvent(urlRequest.query.idevent))
    }
    catch (e) {
        console.log(e)
        response.sendStatus(500)
    }
})

app.get('/selectEmptyEvents', async function (request,response) {
    try {
        response.json(await db.SelectEmptyEvents());
    }
    catch (e) {
        console.log(e)
        response.sendStatus(500)
    }
})

app.post('/deleteEvent', async function (request,response) {
    try {
        let urlRequest = url.parse(request.url, true)
        response.sendStatus(await db.DeleteEvent(urlRequest.query.idevent))
    }
    catch (e) {
        console.log(e)
        response.sendStatus(500)
    }
})

app.get('/getStatistic', async function (request,response) {
    try {
        response.json(await db.GetStatistic());
    }
    catch (e) {
        console.log(e)
        response.sendStatus(500)
    }
})

app.listen(port, 'localhost')
console.log(`Сервер работает на localhost:${port}`)


