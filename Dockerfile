# Specify the base image
FROM node:18

# Set the working directory in the container
WORKDIR /app

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install dependencies
RUN npm ci --ignore-scripts



# Copy the rest of the application code
COPY . .

# Build the TypeScript code
RUN npm run ready

ENV PORT=3000
ENV NODE_ENV=developments
ENV CLIENT=http://localhost:3000

EXPOSE ${PORT}
# Specify the command to run when the container starts
CMD [ "node", "dist/app.js" ]




