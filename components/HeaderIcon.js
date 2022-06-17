function HeaderIcon({ title, Icon }) {
  return (
    <div className="flex flex-col justify-center items-center m-2 w-12 hover:cursor-pointer hover:animate-bounce group">
      <Icon className="h-6" />
      <p className="opacity-0 group-hover:opacity-100">{title.toUpperCase()}</p>
    </div>
  );
}

export default HeaderIcon;
