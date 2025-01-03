PGDMP  	    /            
    |            GuiaOn    16.4    16.4     �           0    0    ENCODING    ENCODING        SET client_encoding = 'UTF8';
                      false            �           0    0 
   STDSTRINGS 
   STDSTRINGS     (   SET standard_conforming_strings = 'on';
                      false            �           0    0 
   SEARCHPATH 
   SEARCHPATH     8   SELECT pg_catalog.set_config('search_path', '', false);
                      false            �           1262    16742    GuiaOn    DATABASE        CREATE DATABASE "GuiaOn" WITH TEMPLATE = template0 ENCODING = 'UTF8' LOCALE_PROVIDER = libc LOCALE = 'Portuguese_Brazil.1252';
    DROP DATABASE "GuiaOn";
                postgres    false                        2615    16744    SchemasGuia    SCHEMA        CREATE SCHEMA "SchemasGuia";
    DROP SCHEMA "SchemasGuia";
                postgres    false            �            1259    16843 
   Avaliacoes    TABLE     �   CREATE TABLE "SchemasGuia"."Avaliacoes" (
    "idAvaliacao" integer NOT NULL,
    "idServicoAvaliado" integer NOT NULL,
    nota integer NOT NULL,
    comentario text NOT NULL,
    "dataAvaliacao" date NOT NULL
);
 '   DROP TABLE "SchemasGuia"."Avaliacoes";
       SchemasGuia         heap    postgres    false    6            �            1259    16799    Passeio    TABLE     �   CREATE TABLE "SchemasGuia"."Passeio" (
    "descricaoPasseio" text NOT NULL,
    "idPasseio" integer NOT NULL,
    "emailGuia" text NOT NULL,
    "pacotePasseio" text NOT NULL,
    "valorPasseio" numeric NOT NULL
);
 $   DROP TABLE "SchemasGuia"."Passeio";
       SchemasGuia         heap    postgres    false    6            �            1259    16815    Reserva    TABLE     �   CREATE TABLE "SchemasGuia"."Reserva" (
    "idReserva" integer NOT NULL,
    "dataReserva" date NOT NULL,
    "dataVolta" date NOT NULL,
    pago boolean DEFAULT false,
    "idUsuario" text NOT NULL,
    "idGuia" text NOT NULL,
    "idPasseio" integer
);
 $   DROP TABLE "SchemasGuia"."Reserva";
       SchemasGuia         heap    postgres    false    6            �            1259    16748    Usuario    TABLE     �   CREATE TABLE "SchemasGuia"."Usuario" (
    nome text NOT NULL,
    "senha " text NOT NULL,
    tipo text NOT NULL,
    "idUsuario" integer NOT NULL,
    email text NOT NULL
);
 $   DROP TABLE "SchemasGuia"."Usuario";
       SchemasGuia         heap    postgres    false    6            �          0    16843 
   Avaliacoes 
   TABLE DATA           t   COPY "SchemasGuia"."Avaliacoes" ("idAvaliacao", "idServicoAvaliado", nota, comentario, "dataAvaliacao") FROM stdin;
    SchemasGuia          postgres    false    219   %       �          0    16799    Passeio 
   TABLE DATA           y   COPY "SchemasGuia"."Passeio" ("descricaoPasseio", "idPasseio", "emailGuia", "pacotePasseio", "valorPasseio") FROM stdin;
    SchemasGuia          postgres    false    217   B       �          0    16815    Reserva 
   TABLE DATA           }   COPY "SchemasGuia"."Reserva" ("idReserva", "dataReserva", "dataVolta", pago, "idUsuario", "idGuia", "idPasseio") FROM stdin;
    SchemasGuia          postgres    false    218   _       �          0    16748    Usuario 
   TABLE DATA           T   COPY "SchemasGuia"."Usuario" (nome, "senha ", tipo, "idUsuario", email) FROM stdin;
    SchemasGuia          postgres    false    216   |       1           2606    16849    Avaliacoes Avaliacoes_pkey 
   CONSTRAINT     n   ALTER TABLE ONLY "SchemasGuia"."Avaliacoes"
    ADD CONSTRAINT "Avaliacoes_pkey" PRIMARY KEY ("idAvaliacao");
 O   ALTER TABLE ONLY "SchemasGuia"."Avaliacoes" DROP CONSTRAINT "Avaliacoes_pkey";
       SchemasGuia            postgres    false    219            *           2606    16805    Passeio Passeio_pkey 
   CONSTRAINT     f   ALTER TABLE ONLY "SchemasGuia"."Passeio"
    ADD CONSTRAINT "Passeio_pkey" PRIMARY KEY ("idPasseio");
 I   ALTER TABLE ONLY "SchemasGuia"."Passeio" DROP CONSTRAINT "Passeio_pkey";
       SchemasGuia            postgres    false    217            -           2606    16822    Reserva Reserva_pkey 
   CONSTRAINT     f   ALTER TABLE ONLY "SchemasGuia"."Reserva"
    ADD CONSTRAINT "Reserva_pkey" PRIMARY KEY ("idReserva");
 I   ALTER TABLE ONLY "SchemasGuia"."Reserva" DROP CONSTRAINT "Reserva_pkey";
       SchemasGuia            postgres    false    218            (           2606    16754    Usuario Usuario_pkey 
   CONSTRAINT     `   ALTER TABLE ONLY "SchemasGuia"."Usuario"
    ADD CONSTRAINT "Usuario_pkey" PRIMARY KEY (email);
 I   ALTER TABLE ONLY "SchemasGuia"."Usuario" DROP CONSTRAINT "Usuario_pkey";
       SchemasGuia            postgres    false    216            .           1259    16838    fki_servico    INDEX     O   CREATE INDEX fki_servico ON "SchemasGuia"."Reserva" USING btree ("idPasseio");
 &   DROP INDEX "SchemasGuia".fki_servico;
       SchemasGuia            postgres    false    218            +           1259    16811    fki_usuario    INDEX     O   CREATE INDEX fki_usuario ON "SchemasGuia"."Passeio" USING btree ("emailGuia");
 &   DROP INDEX "SchemasGuia".fki_usuario;
       SchemasGuia            postgres    false    217            /           1259    16839    fki_usuarioGuia    INDEX     R   CREATE INDEX "fki_usuarioGuia" ON "SchemasGuia"."Reserva" USING btree ("idGuia");
 ,   DROP INDEX "SchemasGuia"."fki_usuarioGuia";
       SchemasGuia            postgres    false    218            2           1259    16855    fki_v    INDEX     T   CREATE INDEX fki_v ON "SchemasGuia"."Avaliacoes" USING btree ("idServicoAvaliado");
     DROP INDEX "SchemasGuia".fki_v;
       SchemasGuia            postgres    false    219            7           2606    16850    Avaliacoes avaliacao    FK CONSTRAINT     �   ALTER TABLE ONLY "SchemasGuia"."Avaliacoes"
    ADD CONSTRAINT avaliacao FOREIGN KEY ("idServicoAvaliado") REFERENCES "SchemasGuia"."Reserva"("idReserva");
 G   ALTER TABLE ONLY "SchemasGuia"."Avaliacoes" DROP CONSTRAINT avaliacao;
       SchemasGuia          postgres    false    219    218    4653            4           2606    16823    Reserva servico    FK CONSTRAINT     �   ALTER TABLE ONLY "SchemasGuia"."Reserva"
    ADD CONSTRAINT servico FOREIGN KEY ("idPasseio") REFERENCES "SchemasGuia"."Passeio"("idPasseio");
 B   ALTER TABLE ONLY "SchemasGuia"."Reserva" DROP CONSTRAINT servico;
       SchemasGuia          postgres    false    218    4650    217            3           2606    16806    Passeio usuario    FK CONSTRAINT     �   ALTER TABLE ONLY "SchemasGuia"."Passeio"
    ADD CONSTRAINT usuario FOREIGN KEY ("emailGuia") REFERENCES "SchemasGuia"."Usuario"(email);
 B   ALTER TABLE ONLY "SchemasGuia"."Passeio" DROP CONSTRAINT usuario;
       SchemasGuia          postgres    false    216    4648    217            5           2606    16828    Reserva usuario    FK CONSTRAINT     �   ALTER TABLE ONLY "SchemasGuia"."Reserva"
    ADD CONSTRAINT usuario FOREIGN KEY ("idUsuario") REFERENCES "SchemasGuia"."Usuario"(email);
 B   ALTER TABLE ONLY "SchemasGuia"."Reserva" DROP CONSTRAINT usuario;
       SchemasGuia          postgres    false    218    216    4648            6           2606    16833    Reserva usuarioGuia    FK CONSTRAINT     �   ALTER TABLE ONLY "SchemasGuia"."Reserva"
    ADD CONSTRAINT "usuarioGuia" FOREIGN KEY ("idGuia") REFERENCES "SchemasGuia"."Usuario"(email);
 H   ALTER TABLE ONLY "SchemasGuia"."Reserva" DROP CONSTRAINT "usuarioGuia";
       SchemasGuia          postgres    false    4648    216    218            �      x������ � �      �      x������ � �      �      x������ � �      �      x������ � �     