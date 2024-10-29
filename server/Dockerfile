FROM python:3.12-slim-bookworm

WORKDIR /app

ENV FLASK_APP=app.py
ENV FLASK_DEBUG=development

COPY ./requirements.txt .

RUN pip install -r requirements.txt

# Copies app.py & Dockerfile in /app
COPY . .

EXPOSE 5000

CMD ["python", "app.py"]