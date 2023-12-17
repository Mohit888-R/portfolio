FROM node:18

WORKDIR /app
COPY package*.json ./

RUN npm install --legacy-peer-deps
RUN npm install
COPY . .
ENV PORT 3000
RUN npm run build
EXPOSE 3000
CMD ["npm","run","start"]



