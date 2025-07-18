import {
  AvatarRoot,
  AvatarImage,
  AvatarFallback,
} from "../../components/Avatar";

const AvatarPage = () => {
  return (
    <div>
      <AvatarRoot>
        <AvatarImage
          src="https://images.unsplash.com/photo-1543610892-0b1f7e6d8ac1?w=128&h=128&dpr=2&q=80"
          size={48}
        />
        <AvatarFallback>LT</AvatarFallback>
      </AvatarRoot>
    </div>
  );
};

export { AvatarPage };
