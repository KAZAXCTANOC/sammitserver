--
-- PostgreSQL database dump
--

-- Dumped from database version 13.3
-- Dumped by pg_dump version 13.3

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

SET default_tablespace = '';

SET default_table_access_method = heap;

--
-- Name: event; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.event (
    id integer NOT NULL,
    name text,
    date text,
    description text,
    status text
);


ALTER TABLE public.event OWNER TO postgres;

--
-- Name: event_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.event_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.event_id_seq OWNER TO postgres;

--
-- Name: event_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.event_id_seq OWNED BY public.event.id;


--
-- Name: participantsevent; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.participantsevent (
    id integer NOT NULL,
    idevent integer,
    idvisitor integer
);


ALTER TABLE public.participantsevent OWNER TO postgres;

--
-- Name: participantsevent_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.participantsevent_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.participantsevent_id_seq OWNER TO postgres;

--
-- Name: participantsevent_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.participantsevent_id_seq OWNED BY public.participantsevent.id;


--
-- Name: visitor; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.visitor (
    id integer NOT NULL,
    name text,
    surname text,
    lastname text,
    birthday text,
    sex text,
    phone text,
    adress text
);


ALTER TABLE public.visitor OWNER TO postgres;

--
-- Name: visitor_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.visitor_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.visitor_id_seq OWNER TO postgres;

--
-- Name: visitor_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.visitor_id_seq OWNED BY public.visitor.id;


--
-- Name: event id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.event ALTER COLUMN id SET DEFAULT nextval('public.event_id_seq'::regclass);


--
-- Name: participantsevent id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.participantsevent ALTER COLUMN id SET DEFAULT nextval('public.participantsevent_id_seq'::regclass);


--
-- Name: visitor id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.visitor ALTER COLUMN id SET DEFAULT nextval('public.visitor_id_seq'::regclass);


--
-- Data for Name: event; Type: TABLE DATA; Schema: public; Owner: postgres
--

INSERT INTO public.event (id, name, date, description, status) VALUES (8, 'Новый год', '2021-12-01T15:11', 'OXIMIRON', 'Завершено');
INSERT INTO public.event (id, name, date, description, status) VALUES (10, 'Новый год', '2021-12-03T15:24', '664565656565', 'Завершено');
INSERT INTO public.event (id, name, date, description, status) VALUES (1, '', '', '', 'Завершено');
INSERT INTO public.event (id, name, date, description, status) VALUES (11, 'MAXIM', '2021-11-25T20:01', 'MAXIM', 'Завершено');


--
-- Data for Name: participantsevent; Type: TABLE DATA; Schema: public; Owner: postgres
--

INSERT INTO public.participantsevent (id, idevent, idvisitor) VALUES (16, 10, 3);
INSERT INTO public.participantsevent (id, idevent, idvisitor) VALUES (17, 1, 10);
INSERT INTO public.participantsevent (id, idevent, idvisitor) VALUES (19, 8, 10);
INSERT INTO public.participantsevent (id, idevent, idvisitor) VALUES (20, 8, 3);
INSERT INTO public.participantsevent (id, idevent, idvisitor) VALUES (23, 11, 1);
INSERT INTO public.participantsevent (id, idevent, idvisitor) VALUES (24, 11, 2);
INSERT INTO public.participantsevent (id, idevent, idvisitor) VALUES (25, 11, 4);
INSERT INTO public.participantsevent (id, idevent, idvisitor) VALUES (26, 11, 1);
INSERT INTO public.participantsevent (id, idevent, idvisitor) VALUES (27, 11, 2);
INSERT INTO public.participantsevent (id, idevent, idvisitor) VALUES (28, 11, 4);


--
-- Data for Name: visitor; Type: TABLE DATA; Schema: public; Owner: postgres
--

INSERT INTO public.visitor (id, name, surname, lastname, birthday, sex, phone, adress) VALUES (1, 'name', 'surname', 'birthday', 'sex', 'phone', 'adress', 'undefined');
INSERT INTO public.visitor (id, name, surname, lastname, birthday, sex, phone, adress) VALUES (2, 'name', 'surname', 'birthday', 'sex', 'phone', 'adress', 'undefined');
INSERT INTO public.visitor (id, name, surname, lastname, birthday, sex, phone, adress) VALUES (3, 'name', 'surname', 'lastname', 'birthday', 'sex', 'phone', 'adress');
INSERT INTO public.visitor (id, name, surname, lastname, birthday, sex, phone, adress) VALUES (4, 'name', 'surname', 'lastname', 'birthday', 'sex', 'phone', 'adress');
INSERT INTO public.visitor (id, name, surname, lastname, birthday, sex, phone, adress) VALUES (5, 'name', 'surname', 'lastname', 'birthday', 'sex', 'phone', 'adress');
INSERT INTO public.visitor (id, name, surname, lastname, birthday, sex, phone, adress) VALUES (6, 'name', 'surname', 'undefined', 'birthday', 'sex', 'phone', 'adress');
INSERT INTO public.visitor (id, name, surname, lastname, birthday, sex, phone, adress) VALUES (7, 'name', 'surname', 'undefined', 'birthday', 'sex', 'phone', 'adress');
INSERT INTO public.visitor (id, name, surname, lastname, birthday, sex, phone, adress) VALUES (8, 'name', 'surname', 'lastname', 'birthday', 'sex', 'phone', 'adress');
INSERT INTO public.visitor (id, name, surname, lastname, birthday, sex, phone, adress) VALUES (9, 'name', 'surname', 'lastname', 'birthday', 'sex', 'phone', 'adress');
INSERT INTO public.visitor (id, name, surname, lastname, birthday, sex, phone, adress) VALUES (10, 'Никита', 'Огнев', 'Сегреевич', '2019-06-14T02:05', 'МУЖСКОЙ !!!!!!', ' 79029544522', 'АБОБУС ОБСОС');
INSERT INTO public.visitor (id, name, surname, lastname, birthday, sex, phone, adress) VALUES (11, 'EditEditEditEditEditEditEdit', 'EditEditEditEditEditEditEdit', 'EditEditEditEditEditEditEdit', '2021-12-05T22:09', 'EditEditEditEditEditEditEdit', '89029544522', 'EditEditEditEditEditEditEdit');
INSERT INTO public.visitor (id, name, surname, lastname, birthday, sex, phone, adress) VALUES (12, 'SASHA', 'SASHA', 'SASHA', '2021-12-24T22:09', 'SASHA', 'SASHASASHASASHASASHASASHASASHA', 'SASHA');
INSERT INTO public.visitor (id, name, surname, lastname, birthday, sex, phone, adress) VALUES (13, 'SASHA', 'SASHA', 'SASHA', '2021-12-05T22:09', 'SASHA', 'SASHASASHASASHASASHASASHASASHA', 'SASHA');


--
-- Name: event_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.event_id_seq', 12, true);


--
-- Name: participantsevent_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.participantsevent_id_seq', 28, true);


--
-- Name: visitor_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.visitor_id_seq', 13, true);


--
-- Name: event event_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.event
    ADD CONSTRAINT event_pkey PRIMARY KEY (id);


--
-- Name: participantsevent participantsevent_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.participantsevent
    ADD CONSTRAINT participantsevent_pkey PRIMARY KEY (id);


--
-- Name: visitor visitor_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.visitor
    ADD CONSTRAINT visitor_pkey PRIMARY KEY (id);


--
-- Name: participantsevent participantsevent_idevent_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.participantsevent
    ADD CONSTRAINT participantsevent_idevent_fkey FOREIGN KEY (idevent) REFERENCES public.event(id) ON DELETE CASCADE;


--
-- Name: participantsevent participantsevent_idvisitor_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.participantsevent
    ADD CONSTRAINT participantsevent_idvisitor_fkey FOREIGN KEY (idvisitor) REFERENCES public.visitor(id) ON DELETE CASCADE;


--
-- PostgreSQL database dump complete
--

