FROM node:slim as builder

WORKDIR /app
COPY . .
RUN npm install
RUN npm run build

FROM node:slim
COPY --from=builder /app/.next /app/.next
COPY --from=builder /app/package* /app
COPY --from=builder /app/next* /app
COPY --from=builder /app/public /app/public
COPY --from=builder /app/node_modules /app/node_modules

WORKDIR /app

EXPOSE 3000

CMD ["npm", "start"]