import { type classNameProp } from "src/utils/classNameProp";

export function ClearTasksIcon({ className }: classNameProp) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 24 24">
      <path
        className={className}
        d="M14 10H3v2h11v-2zm0-4H3v2h11V6zM3 16h7v-2H3v2zm11.41 6L17 19.41L19.59 22L21 20.59L18.41 18L21 15.41L19.59 14L17 16.59L14.41 14L13 15.41L15.59 18L13 20.59L14.41 22z"
      />
    </svg>
  );
}
