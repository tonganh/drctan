export default function BrandLogos() {
    const brands = [
      {
        name: 'Singularity University',
        logo: 'https://upload.wikimedia.org/wikipedia/commons/1/11/Singularity-University-LOGO.jpg',
      },
      {
        name: 'TEDx',
        logo: 'https://upload.wikimedia.org/wikipedia/commons/7/7e/TEDx_Logo_White_Background_Single_Line.png',
      },
      {
        name: 'United Nations',
        logo: 'https://upload.wikimedia.org/wikipedia/commons/4/4d/Logo_of_the_United_Nations.svg',
      },
      {
        name: 'World Bank',
        logo: 'https://upload.wikimedia.org/wikipedia/commons/8/87/The_World_Bank_logo.svg',
      },
      {
        name: 'Bond University',
        logo: 'https://upload.wikimedia.org/wikipedia/en/thumb/b/b0/Logotype_of_Bond_University.svg/250px-Logotype_of_Bond_University.svg.png',
      },
      {
        name: 'Griffith University',
        logo: 'https://upload.wikimedia.org/wikipedia/en/thumb/a/a9/Griffith_University_Logo_Variant_2022.svg/330px-Griffith_University_Logo_Variant_2022.svg.png',
      },
      {
        name: 'Citi',
        logo: `data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 120 40'><text x='10' y='30' font-family='Arial,sans-serif' font-size='28' font-weight='bold' fill='%23003B70'>citi</text><rect x='95' y='6' width='6' height='6' rx='3' fill='%23E31837'/></svg>`,
      },
      {
        name: 'OpenExO',
        logo: 'https://web.openexo.com/wp-content/uploads/2022/12/OpenExO-Logo-Blue.png',
      },
      {
        name: 'Southern Cross University',
        logo: 'https://upload.wikimedia.org/wikipedia/commons/c/c0/Southern_Cross_vertical.png',
      },
    ];
  
    return (
      <div className="bg-white py-16 border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h3 className="text-center text-sm font-semibold text-gray-500 tracking-wide uppercase mb-10">
            Trusted by Leading Organizations Worldwide
          </h3>
          <div className="grid grid-cols-3 md:grid-cols-5 lg:grid-cols-9 gap-8 items-center justify-items-center">
            {brands.map((brand, index) => (
              <div
                key={index}
                className="flex flex-col items-center justify-center gap-2 group"
              >
                <div className="h-12 w-full flex items-center justify-center">
                  <img
                    src={brand.logo}
                    alt={brand.name}
                    className="max-h-12 max-w-full object-contain grayscale hover:grayscale-0 transition-all duration-300 opacity-50 hover:opacity-100"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }
  