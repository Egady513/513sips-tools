@echo off
echo Starting 513 Sips Finance Tool...
cd /d "%~dp0books"
start "" "http://localhost:5173"
npm run dev
pause
