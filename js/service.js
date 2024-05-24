document.addEventListener("DOMContentLoaded", function () {
  const services = [
    {
      id: 1,
      title: "Web Development",
      description:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolore quia dolorum ut, distinctio ex id eos harum animi saepe. Aspernatur atque, natus rem distinctio accusamus hic temporibus non enim in.",
      icon: "fa-solid fa-arrow-right",
    },
    {
      id: 2,
      title: "Mobile Development",
      description:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolore quia dolorum ut, distinctio ex id eos harum animi saepe. Aspernatur atque, natus rem distinctio accusamus hic temporibus non enim in.",
      icon: "fa-solid fa-arrow-right",
    },
    {
      id: 3,
      title: "UI/UX Design",
      description:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolore quia dolorum ut, distinctio ex id eos harum animi saepe. Aspernatur atque, natus rem distinctio accusamus hic temporibus non enim in.",
      icon: "fa-solid fa-arrow-right",
    },
    {
      id: 4,
      title: "QA Testing",
      description:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolore quia dolorum ut, distinctio ex id eos harum animi saepe. Aspernatur atque, natus rem distinctio accusamus hic temporibus non enim in.",
      icon: "fa-solid fa-arrow-right",
    },
  ];

  const serviceContainer = document.querySelector(".content-container");

  services.forEach((service) => {
    const serviceCard = document.createElement("div");
    serviceCard.classList.add("service-card");

    const serviceHeader = document.createElement("div");
    serviceHeader.classList.add("service-header");

    const serviceId = document.createElement("div");
    serviceId.classList.add("service-id");
    serviceId.classList.add("text-outline");

    serviceId.textContent = service.id;

    const serviceIcon = document.createElement("i");
    serviceIcon.classList.add(...service.icon.split(" "));

    serviceHeader.appendChild(serviceId);
    serviceHeader.appendChild(serviceIcon);

    const serviceContent = document.createElement("div");
    serviceContent.classList.add("service-content");

    const serviceTitle = document.createElement("h3");
    serviceTitle.textContent = service.title;

    const serviceDescription = document.createElement("p");
    serviceDescription.textContent = service.description;

    serviceContent.appendChild(serviceTitle);
    serviceContent.appendChild(serviceDescription);

    serviceCard.appendChild(serviceHeader);
    serviceCard.appendChild(serviceContent);

    serviceContainer.appendChild(serviceCard);
  });
});
