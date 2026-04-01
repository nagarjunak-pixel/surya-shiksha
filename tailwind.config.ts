import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        surya: {
          50: '#FFF7ED',
          100: '#FFEDD5',
          200: '#FED7AA',
          300: '#FDBA74',
          400: '#FB923C',
          500: '#F97316',
          600: '#EA580C',
          700: '#C2410C',
          800: '#9A3412',
          900: '#7C2D12'
        }
      },
      backgroundImage: {
        'surya-gradient': 'linear-gradient(135deg, #F97316 0%, #F59E0B 100%)'
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-8px)' }
        },
        pulseSun: {
          '0%, 100%': { transform: 'scale(1)', opacity: '1' },
          '50%': { transform: 'scale(1.08)', opacity: '.85' }
        }
      },
      animation: {
        float: 'float 4s ease-in-out infinite',
        pulseSun: 'pulseSun 2.2s ease-in-out infinite'
      }
    }
  },
  plugins: []
};

export default config;
