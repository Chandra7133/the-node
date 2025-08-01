# Use official Node.js LTS image
FROM node:20

# Set the working directory inside the container
WORKDIR /app

# Copy package.json and package-lock.json (if available)
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy all source files to the container
COPY . .

# Expose the port your app runs on
EXPOSE 9526

# Start the app
CMD ["npm", "run", "dev"]
