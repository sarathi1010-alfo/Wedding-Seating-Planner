export type ThemeConfig = {
  name: string;
  colors: {
    background: string;
    primary: string;
    secondary: string;
    text: string;
    accent: string;
  };
  typography: {
    heading: string;
    body: string;
  };
};

export const themes: Record<string, ThemeConfig> = {
  luxury: {
    name: 'Luxury Wedding',
    colors: {
      background: '#F8F5F0', // Ivory
      primary: '#D6C3A5', // Champagne
      secondary: '#B8A89A', // Soft Taupe
      text: '#3A3532', // Warm Charcoal
      accent: '#C5A880', // Deeper Champagne
    },
    typography: {
      heading: 'Playfair Display, serif',
      body: 'Inter, sans-serif',
    },
  },
  minimalist: {
    name: 'Minimalist',
    colors: {
      background: '#FFFFFF',
      primary: '#000000',
      secondary: '#F5F5F5',
      text: '#111111',
      accent: '#666666',
    },
    typography: {
      heading: 'Inter, sans-serif',
      body: 'Inter, sans-serif',
    },
  },
  floral: {
    name: 'Floral Garden',
    colors: {
      background: '#F9FBF9', // Soft Mint
      primary: '#D4E0D6', // Sage
      secondary: '#EACAC6', // Dusty Rose
      text: '#2D3A31', // Deep Forest
      accent: '#F3E5D8', // Peach
    },
    typography: {
      heading: 'Playfair Display, serif',
      body: 'Inter, sans-serif',
    },
  },
  beach: {
    name: 'Beach Romance',
    colors: {
      background: '#F5F7FA', // Sea Foam
      primary: '#AEC6CF', // Pastel Blue
      secondary: '#E6DCC3', // Sand
      text: '#2B4A5F', // Ocean Dark
      accent: '#FFD1DC', // Coral Pink
    },
    typography: {
      heading: 'Playfair Display, serif',
      body: 'Inter, sans-serif',
    },
  },
};
