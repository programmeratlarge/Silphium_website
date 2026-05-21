import { ImageResponse } from 'next/og';

export const runtime = 'edge';
export const alt = 'Silphium — Developing Non-Hormonal Male Contraception';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

export default function OgImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: 1200,
          height: 630,
          display: 'flex',
          flexDirection: 'column',
          backgroundColor: '#f8f4ee',
          padding: '0',
        }}
      >
        {/* Red accent bar */}
        <div style={{ width: '100%', height: 8, backgroundColor: '#7b1d2e' }} />

        {/* Content area */}
        <div
          style={{
            flex: 1,
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            padding: '64px 80px',
          }}
        >
          {/* Wordmark */}
          <div
            style={{
              fontSize: 80,
              fontWeight: 700,
              color: '#1c1c1e',
              letterSpacing: '-2px',
              lineHeight: 1,
              marginBottom: 32,
            }}
          >
            Silphium
          </div>

          {/* Tagline */}
          <div
            style={{
              fontSize: 28,
              color: '#6e6e73',
              lineHeight: 1.4,
              maxWidth: 760,
            }}
          >
            Developing an investigational, non-hormonal male contraceptive platform.
          </div>
        </div>

        {/* Bottom accent bar */}
        <div style={{ width: '100%', height: 4, backgroundColor: '#c26a35' }} />
      </div>
    ),
    { ...size }
  );
}
