SOLUTION:
Fixed the Render frontend deployment issue by updating render.yaml:

BEFORE (Incorrect):
rootDir: client
buildCommand: npm run build
publishDir: dist

AFTER (Correct):
rootDir: ""
buildCommand: cd client && npm install && npm run build
publishDir: client/dist

The issue was that Render was looking for the client directory as the root, but the client directory is actually a subfolder within the repository root.   