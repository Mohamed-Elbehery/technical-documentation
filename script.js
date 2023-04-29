const clipboardIcons = document.querySelectorAll(".fa-clipboard");

//todo the Copy Function takes the icon element as a parameter then gets the inner html and write it for the user in the clipboard
const copyContent = async (el) => {
  try {
    await navigator.clipboard.writeText(
      el.parentElement.previousElementSibling.innerHTML
    );
  } catch (err) {
    console.error("Failed to copy: ", err);
  }
};

//todo Looping on all icons to add click event then copy the content inside of the code
clipboardIcons.forEach((icon) => {
  icon.addEventListener("click", () => {
    icon.nextElementSibling.innerHTML = "Copied to Clipboard";
    copyContent(icon);
  });

  icon.addEventListener("mouseenter", () => {
    icon.nextElementSibling.innerHTML = "Copy to Clipboard";
  });
});
