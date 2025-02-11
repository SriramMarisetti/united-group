import './dndbrochure.css';
import React, { useState } from 'react';

const companiesData = {
    'BOSCH': ['Brand A', 'Brand B', 'Brand C'],
    'STIHL': ['Brand X', 'Brand Y', 'Brand Z'],
    'HUSQVARNA': ['Brand A', 'Brand B', 'Brand C'],
    'PHILIPS': ['Brand X', 'Brand Y', 'Brand Z'],
    'STANLEY': ['Brand A', 'Brand B', 'Brand C'],
    'BLACK & DECKER': ['Brand X', 'Brand Y', 'Brand Z'],
    'DEWALT': ['Brand A', 'Brand B', 'Brand C'],
    'WOLF GARTEN': ['Brand X', 'Brand Y', 'Brand Z'],
  };
  const Brochurednd = () => {
    const [selectedCompany, setSelectedCompany] = useState('');
    const [brands, setBrands] = useState([]);
    const [selectedBrand, setSelectedBrand] = useState('');
    const [selectedYear, setSelectedYear] = useState('');
    const [isDownloadEnabled, setIsDownloadEnabled] = useState(false);
  
    const handleCompanyChange = (e) => {
      const company = e.target.value;
      setSelectedCompany(company);
      setBrands(companiesData[company] || []);
      setSelectedBrand('');
      setSelectedYear('');
      setIsDownloadEnabled(false);
    };
  const years = [2021, 2022, 2023, 2024];
  const handleBrandChange = (e) => {
    setSelectedBrand(e.target.value);
    setSelectedYear('');
    setIsDownloadEnabled(false);
  };

  const handleYearChange = (e) => {
    setSelectedYear(e.target.value);
    setIsDownloadEnabled(true);
  };

  const handleDownload = () => {
    alert(
      `Downloading brochure for ${selectedCompany} - ${selectedBrand} (${selectedYear})`
    );
  };

  return (
    <div className="form-container">
      <h1>Download Our Latest Brochures</h1>
      <form>
        {/* Company Dropdown */}
        <div className='slect_brand'>
          <label htmlFor="company">Select Brand</label>
          <select id="company" value={selectedCompany} onChange={handleCompanyChange}>
            <option value="">--Select Company--</option>
            {Object.keys(companiesData).map((company) => (
              <option key={company} value={company}>
                {company}
              </option>
            ))}
          </select>
        </div>

        {/* Brand Dropdown */}
        {brands.length > 0 && (
          <div className='slect_sub_cat'>
            <label htmlFor="brand">Select Brand:</label>
            <select
              id="brand"
              value={selectedBrand}
              onChange={handleBrandChange}
            >
              <option value="">--Select Brand--</option>
              {brands.map((brand) => (
                <option key={brand} value={brand}>
                  {brand}
                </option>
              ))}
            </select>
          </div>
        )}

        {/* Year Dropdown */}
        {selectedBrand && (
          <div className='select_catergeory'>
            <label htmlFor="year">Select Catergeory:</label>
            <select id="year" value={selectedYear} onChange={handleYearChange}>
              <option value="">Select Year</option>
              {years.map((year) => (
                <option key={year} value={year}>
                  {year}
                </option>
              ))}
            </select>
          </div>
        )}

        {/* Download Button */}
        {isDownloadEnabled && (
          <div className='dndoption'>
            <button type="button" onClick={handleDownload} className='dndbutton'>
              Download Brochure
            </button>
          </div>
        )}
      </form>
    </div>
  );
};

export default Brochurednd;
