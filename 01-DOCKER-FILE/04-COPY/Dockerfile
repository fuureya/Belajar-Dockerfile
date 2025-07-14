FROM nginx:alpine

RUN mkdir /webapp

RUN echo "ini web app" > /webapp/sample.txt

RUN cat /webapp/sample.txt

COPY word/kata.txt /home/

COPY file/*txt /home/


