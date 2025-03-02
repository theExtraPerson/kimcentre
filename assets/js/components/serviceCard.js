/**
 * Service Card Component
 * Implements the Factory Method pattern
 */
class ServiceCardComponent {
    /**
     * Create a service card element
     * @param {Object} service - Service data object
     * @returns {HTMLElement} - The created service card element
     */
    static create(service) {
        const cardCol = document.createElement('div');
        cardCol.className = 'col-md-4 mb-4';
        
        cardCol.innerHTML = `
            <div class="service-card">
                <div class="card h-100 shadow-sm">
                    <div class="card-body text-center p-4">
                        <div class="service-icon mb-3">
                            <i class="fas ${service.icon} fa-3x text-primary" aria-hidden="true"></i>
                        </div>
                        <h3 class="card-title h4">${service.title}</h3>
                        <p class="card-text">${service.description}</p>
                        <a href="pages/services.html#${service.id}" class="btn btn-outline-primary mt-3" 
                           aria-label="Learn more about ${service.title}">
                            Learn More
                        </a>
                    </div>
                </div>
            </div>
        `;
        
        return cardCol;
    }
}
