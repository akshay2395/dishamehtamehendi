--drop SEQUENCE com_client_info_m_seq ;
CREATE SEQUENCE com_client_info_m_seq 
START     WITH 10000
INCREMENT BY   1
MAXVALUE       99999999
CACHE          20;
  

--drop TABLE com_client_info_m;
CREATE TABLE com_client_info_m (
lclientseq      NUMBER      PRIMARY KEY,
strname         VARCHAR2(50),
strcontactnbr   VARCHAR2(13),
stremailid      VARCHAR2(50),
strclientloc    VARCHAR2(25),
strcomments     VARCHAR2(500),
ncontactstatus  NUMBER(1)
);



comment on column com_client_info_m.lclientseq     is  'client ID';
comment on column com_client_info_m.ncontactstatus is  '1: YES , 0:NO';

commit;
