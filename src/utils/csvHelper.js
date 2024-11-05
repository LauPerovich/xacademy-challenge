const XLSX = require('xlsx');
const path = require('path');
const fs = require('fs');

const exportToCSV = (data, fileName) => {
    const csvHeader = Object.keys(data[0]).join(',') + '\n';
    const csvRows = data.map(row => {
        return Object.values(row).map(value => `"${value}"`).join(',');
    }).join('\n');

    const csvContent = csvHeader + csvRows;
    const filePath = path.join(__dirname, '..', fileName);

    fs.writeFileSync(filePath, csvContent);
    return filePath;
};

module.exports = { exportToCSV };
