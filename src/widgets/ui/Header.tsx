export default function Header() {
  return (
    <div
      style={{
        textAlign: 'center',
        marginBottom: '4px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        gap: '9px',
        minWidth: '376px',
        width: '100%',
        height: '64px',
      }}
    >
      <div className="symbol">
        <div
          style={{
            background: '#1677ff',
            width: '24px',
            height: '24px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            borderRadius: '50%',
          }}
        >
          <div
            style={{
              background: '#fff',
              width: '12px',
              height: '12px',
              borderRadius: '50%',
            }}
          />
        </div>
      </div>

      <img
        src="/images/Text Wrapper.png"
        alt="Lock icon"
        style={{ width: 65.24, height: 'auto' }}
      />
    </div>
  );
}
