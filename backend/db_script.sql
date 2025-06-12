CREATE TABLE IF NOT EXISTS public.todo
(
    id serial NOT NULL,
    title character varying(255) NOT NULL,
    description text,
    created_at timestamp without time zone NOT NULL,
    updated_at timestamp without time zone,
    CONSTRAINT todo_pkey PRIMARY KEY (id)
);