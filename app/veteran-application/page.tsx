'use client'

import { useState } from 'react'
import Image from 'next/image'
import SectionTitle from '@/components/SectionTitle'

export default function VeteranApplication() {
  const [formData, setFormData] = useState({
    // Military Background
    veteranName: '',
    rank: '',
    dateOfBirthMonth: '',
    dateOfBirthDay: '',
    dateOfBirthYear: '',
    mosRateAfsc: '',
    typeOfDischarge: '',
    vaCompensationClaimStatus: '',
    branchOfService: [] as string[],
    conflictServed: [] as string[],
    separationStatus: [] as string[],
    dateSeparatedMonth: '',
    dateSeparatedDay: '',
    dateSeparatedYear: '',
    
    // Military/VA Information
    militarySeparatedRating: '',
    vaCompensationRating: '',
    vaClaimSubmittedMonth: '',
    vaClaimSubmittedDay: '',
    vaClaimSubmittedYear: '',
    
    // Personal Information
    maritalStatus: '',
    homeAddress: '',
    city: '',
    ethnicity: '',
    spouseName: '',
    homePhoneNumber: '',
    
    // Contact Information
    state: '',
    county: '',
    zipcode: '',
    cellPhoneNumber: '',
    emailAddress: '',
    
    // Employment
    desiredCareer: '',
    currentPosition: '',
    currentEmployer: '',
    fullTime: '',
    hoursPerWeek: '',
    post911GIBillAvailable: '',
    giBillMonths: '',
    
    // Education
    certificationsLicenses: '',
    vocationalRehab: '',
    vocationalRehabSchool: '',
    currentlyEnrolledInSchool: '',
    courseOfStudy: '',
    schoolName: '',
    
    // Emergency Contact
    emergencyContactName: '',
    emergencyContactEmail: '',
    emergencyContactAddress: '',
    emergencyContactHomePhone: '',
    
    // Acknowledgements
    acknowledgementComplete: false,
    acknowledgementPost911: false,
    eSignatureAgreement: false,
    
    // Documents
    dd214: null as File | null,
    vaRatingsBreakdown: null as File | null,
    pictureID: null as File | null,
    
    // E-Signature
    eSignature: '',
    date: '',
    securityAnswer: '',
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target
    if (type === 'checkbox') {
      const checked = (e.target as HTMLInputElement).checked
      setFormData(prev => ({
        ...prev,
        [name]: checked,
      }))
    } else {
      setFormData(prev => ({
        ...prev,
        [name]: value,
      }))
    }
  }

  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>, field: string) => {
    const { value, checked } = e.target
    setFormData(prev => ({
      ...prev,
      [field]: checked
        ? [...(prev[field as keyof typeof prev] as string[]), value]
        : (prev[field as keyof typeof prev] as string[]).filter((item: string) => item !== value),
    }))
  }

  const handleRadioChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name } = e.target
    const file = e.target.files?.[0] || null
    setFormData(prev => ({
      ...prev,
      [name]: file,
    }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('Form submitted:', formData)
  }

  const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
  const days = Array.from({ length: 31 }, (_, i) => i + 1)
  const years = Array.from({ length: 50 }, (_, i) => new Date().getFullYear() - i)

  return (
    <main className="min-h-screen bg-cvc-page pt-[2.5rem] text-cvc-fg sm:pt-[2.75rem]">
      <section className="py-16">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Logo */}
          <div className="mb-8 flex items-center justify-center">
            <Image
              src="/CVClogo.png"
              alt="Combat Veterans to Careers"
              width={200}
              height={200}
              className="object-contain"
            />
          </div>

          <SectionTitle as="h2" title="Application" size="page" align="center" className="mb-8" />

          {/* Information For Veterans Section */}
          <div className="mb-12 rounded-lg border border-cvc-border bg-cvc-card p-8">
            <SectionTitle
              as="h1"
              title="Information For Veterans"
              size="page"
              align="left"
              className="mb-6"
              subtitle={
                <>
                  <p className="mb-4 text-xl font-bold text-cvc-fg">In War, There Are No Unwounded Soldiers.</p>
                  <p className="mb-4 leading-relaxed text-cvc-fg-muted">
                    The transition from military service to civilian life can be challenging, especially for combat
                    veterans who have served in Iraq and Afghanistan. Combat Veterans to Careers (CVC) is dedicated to
                    helping these heroes and their families in Central Florida prepare for successful careers in the
                    civilian workforce.
                  </p>
                  <p className="leading-relaxed text-cvc-fg-muted">
                    If you are interested in learning more about our programs and services, please fill out the form
                    below. We work with veterans who served post-9/11 in Iraq or Afghanistan, require verification of
                    service, and ensure all information is kept confidential.
                  </p>
                </>
              }
            />
          </div>

          <form onSubmit={handleSubmit} className="space-y-8">
            {/* Military Background Section */}
            <div className="rounded-lg border border-cvc-border bg-cvc-card p-8">
              <SectionTitle title="Military Background" size="subsection" align="left" className="mb-8" />
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Left Column */}
                <div className="space-y-6">
                  <div>
                    <label className="block text-sm font-semibold text-cvc-fg mb-2">
                      Veteran Name<span className="text-red-600">*</span>
                    </label>
                    <input
                      type="text"
                      name="veteranName"
                      value={formData.veteranName}
                      onChange={handleChange}
                      required
                      className="w-full border border-cvc-border bg-cvc-card-inner px-4 py-3 text-cvc-fg focus:border-patriotic-blue focus:outline-none"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-cvc-fg mb-2">
                      Rank<span className="text-red-600">*</span>
                    </label>
                    <input
                      type="text"
                      name="rank"
                      value={formData.rank}
                      onChange={handleChange}
                      required
                      className="w-full border border-cvc-border bg-cvc-card-inner px-4 py-3 text-cvc-fg focus:border-patriotic-blue focus:outline-none"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-cvc-fg mb-2">
                      Date of Birth<span className="text-red-600">*</span>
                    </label>
                    <div className="grid grid-cols-3 gap-2">
                      <select
                        name="dateOfBirthMonth"
                        value={formData.dateOfBirthMonth}
                        onChange={handleChange}
                        required
                        className="border border-cvc-border bg-cvc-card-inner px-4 py-3 text-cvc-fg focus:border-patriotic-blue focus:outline-none"
                      >
                        <option value="">Month</option>
                        {months.map(month => (
                          <option key={month} value={month}>{month}</option>
                        ))}
                      </select>
                      <select
                        name="dateOfBirthDay"
                        value={formData.dateOfBirthDay}
                        onChange={handleChange}
                        required
                        className="border border-cvc-border bg-cvc-card-inner px-4 py-3 text-cvc-fg focus:border-patriotic-blue focus:outline-none"
                      >
                        <option value="">Day</option>
                        {days.map(day => (
                          <option key={day} value={day}>{day}</option>
                        ))}
                      </select>
                      <select
                        name="dateOfBirthYear"
                        value={formData.dateOfBirthYear}
                        onChange={handleChange}
                        required
                        className="border border-cvc-border bg-cvc-card-inner px-4 py-3 text-cvc-fg focus:border-patriotic-blue focus:outline-none"
                      >
                        <option value="">Year</option>
                        {years.map(year => (
                          <option key={year} value={year}>{year}</option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-cvc-fg mb-2">
                      MOS/Rate/AFSC<span className="text-red-600">*</span>
                    </label>
                    <input
                      type="text"
                      name="mosRateAfsc"
                      value={formData.mosRateAfsc}
                      onChange={handleChange}
                      required
                      className="w-full border border-cvc-border bg-cvc-card-inner px-4 py-3 text-cvc-fg focus:border-patriotic-blue focus:outline-none"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-cvc-fg mb-2">
                      Type of Discharge (must be honorable)<span className="text-red-600">*</span>
                    </label>
                    <input
                      type="text"
                      name="typeOfDischarge"
                      value={formData.typeOfDischarge}
                      onChange={handleChange}
                      required
                      className="w-full border border-cvc-border bg-cvc-card-inner px-4 py-3 text-cvc-fg focus:border-patriotic-blue focus:outline-none"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-cvc-fg mb-3">
                      Status for Submitted VA Compensation Claim<span className="text-red-600">*</span>
                    </label>
                    <div className="space-y-2">
                      {['Approved', 'Declined', 'Unknown'].map((status) => (
                        <label key={status} className="flex items-center space-x-3 cursor-pointer">
                          <input
                            type="radio"
                            name="vaCompensationClaimStatus"
                            value={status}
                            checked={formData.vaCompensationClaimStatus === status}
                            onChange={handleRadioChange}
                            required
                            className="h-5 w-5 text-patriotic-blue"
                          />
                          <span className="text-cvc-fg-muted">{status}</span>
                        </label>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Right Column */}
                <div className="space-y-6">
                  <div>
                    <label className="block text-sm font-semibold text-cvc-fg mb-3">
                      Branch of Service<span className="text-red-600">*</span>
                    </label>
                    <div className="space-y-2">
                      {['U.S. Air Force', 'U.S. Army', 'U.S. Coast Guard', 'U.S. Marine Corps', 'U.S. Navy', 'U.S. National Guard/Reserves'].map((branch) => (
                        <label key={branch} className="flex items-center space-x-3 cursor-pointer">
                          <input
                            type="checkbox"
                            value={branch}
                            checked={formData.branchOfService.includes(branch)}
                            onChange={(e) => handleCheckboxChange(e, 'branchOfService')}
                            className="h-5 w-5 rounded border-cvc-border text-patriotic-blue"
                          />
                          <span className="text-cvc-fg-muted">{branch}</span>
                        </label>
                      ))}
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-cvc-fg mb-3">
                      Conflict Served In<span className="text-red-600">*</span>
                    </label>
                    <div className="space-y-2">
                      {['OIF (Operation Iraqi Freedom)', 'OEF (Operation Enduring Freedom)', 'OND (Operation New Dawn)'].map((conflict) => (
                        <label key={conflict} className="flex items-center space-x-3 cursor-pointer">
                          <input
                            type="checkbox"
                            value={conflict}
                            checked={formData.conflictServed.includes(conflict)}
                            onChange={(e) => handleCheckboxChange(e, 'conflictServed')}
                            className="h-5 w-5 rounded border-cvc-border text-patriotic-blue"
                          />
                          <span className="text-cvc-fg-muted">{conflict}</span>
                        </label>
                      ))}
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-cvc-fg mb-3">
                      Separation Status<span className="text-red-600">*</span>
                    </label>
                    <div className="space-y-2">
                      {['Retired', 'Medically Retired', 'Medically Discharged', 'Discharged', 'Reserve', 'Active Duty'].map((status) => (
                        <label key={status} className="flex items-center space-x-3 cursor-pointer">
                          <input
                            type="checkbox"
                            value={status}
                            checked={formData.separationStatus.includes(status)}
                            onChange={(e) => handleCheckboxChange(e, 'separationStatus')}
                            className="h-5 w-5 rounded border-cvc-border text-patriotic-blue"
                          />
                          <span className="text-cvc-fg-muted">{status}</span>
                        </label>
                      ))}
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-cvc-fg mb-2">
                      Date Separated (if active duty, please provide anticipated date of separation.)
                    </label>
                    <div className="grid grid-cols-2 gap-2">
                      <select
                        name="dateSeparatedMonth"
                        value={formData.dateSeparatedMonth}
                        onChange={handleChange}
                        className="border border-cvc-border bg-cvc-card-inner px-4 py-3 text-cvc-fg focus:border-patriotic-blue focus:outline-none"
                      >
                        <option value="">Month</option>
                        {months.map(month => (
                          <option key={month} value={month}>{month}</option>
                        ))}
                      </select>
                      <select
                        name="dateSeparatedDay"
                        value={formData.dateSeparatedDay}
                        onChange={handleChange}
                        className="border border-cvc-border bg-cvc-card-inner px-4 py-3 text-cvc-fg focus:border-patriotic-blue focus:outline-none"
                      >
                        <option value="">Day</option>
                        {days.map(day => (
                          <option key={day} value={day}>{day}</option>
                        ))}
                      </select>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Military/VA Information Section */}
            <div className="rounded-lg border border-cvc-border bg-cvc-card p-8">
              <SectionTitle title="Military/VA Information" size="subsection" align="left" className="mb-6" />
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-semibold text-cvc-fg mb-2">
                    Military Separated Rating:
                  </label>
                  <input
                    type="text"
                    name="militarySeparatedRating"
                    value={formData.militarySeparatedRating}
                    onChange={handleChange}
                    className="w-full border border-cvc-border bg-cvc-card-inner px-4 py-3 text-cvc-fg focus:border-patriotic-blue focus:outline-none"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-cvc-fg mb-2">
                    VA Compensation Rating:
                  </label>
                  <input
                    type="text"
                    name="vaCompensationRating"
                    value={formData.vaCompensationRating}
                    onChange={handleChange}
                    className="w-full border border-cvc-border bg-cvc-card-inner px-4 py-3 text-cvc-fg focus:border-patriotic-blue focus:outline-none"
                  />
                </div>

                <div className="md:col-span-2">
                  <label className="block text-sm font-semibold text-cvc-fg mb-2">
                    (if no rating has been received for VA) Date VA Compensation Claim Submitted:
                  </label>
                  <div className="grid grid-cols-3 gap-2">
                    <select
                      name="vaClaimSubmittedMonth"
                      value={formData.vaClaimSubmittedMonth}
                      onChange={handleChange}
                      className="border border-cvc-border bg-cvc-card-inner px-4 py-3 text-cvc-fg focus:border-patriotic-blue focus:outline-none"
                    >
                      <option value="">Month</option>
                      {months.map(month => (
                        <option key={month} value={month}>{month}</option>
                      ))}
                    </select>
                    <select
                      name="vaClaimSubmittedDay"
                      value={formData.vaClaimSubmittedDay}
                      onChange={handleChange}
                      className="border border-cvc-border bg-cvc-card-inner px-4 py-3 text-cvc-fg focus:border-patriotic-blue focus:outline-none"
                    >
                      <option value="">Day</option>
                      {days.map(day => (
                        <option key={day} value={day}>{day}</option>
                      ))}
                    </select>
                    <select
                      name="vaClaimSubmittedYear"
                      value={formData.vaClaimSubmittedYear}
                      onChange={handleChange}
                      className="border border-cvc-border bg-cvc-card-inner px-4 py-3 text-cvc-fg focus:border-patriotic-blue focus:outline-none"
                    >
                      <option value="">Year</option>
                      {years.map(year => (
                        <option key={year} value={year}>{year}</option>
                      ))}
                    </select>
                  </div>
                </div>
              </div>
            </div>

            {/* Personal Information Section */}
            <div className="rounded-lg border border-cvc-border bg-cvc-card p-8">
              <SectionTitle title="Personal Information" size="subsection" align="left" className="mb-6" />
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-semibold text-cvc-fg mb-3">
                    Marital Status<span className="text-red-600">*</span>
                  </label>
                  <div className="space-y-2">
                    {['Single', 'Married', 'Separated', 'Divorce', 'Widowed'].map((status) => (
                      <label key={status} className="flex items-center space-x-3 cursor-pointer">
                        <input
                          type="radio"
                          name="maritalStatus"
                          value={status}
                          checked={formData.maritalStatus === status}
                          onChange={handleRadioChange}
                          required
                          className="h-5 w-5 text-patriotic-blue"
                        />
                        <span className="text-cvc-fg-muted">{status}</span>
                      </label>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-cvc-fg mb-3">
                    Ethnicity<span className="text-red-600">*</span>
                  </label>
                  <div className="space-y-2">
                    {['African American or Black', 'Hispanic or Latino', 'Multi-ethic', 'Unknown/Unreported', 'White'].map((ethnicity) => (
                      <label key={ethnicity} className="flex items-center space-x-3 cursor-pointer">
                        <input
                          type="radio"
                          name="ethnicity"
                          value={ethnicity}
                          checked={formData.ethnicity === ethnicity}
                          onChange={handleRadioChange}
                          required
                          className="h-5 w-5 text-patriotic-blue"
                        />
                        <span className="text-cvc-fg-muted">{ethnicity}</span>
                      </label>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-cvc-fg mb-2">
                    Home Address<span className="text-red-600">*</span>
                  </label>
                  <input
                    type="text"
                    name="homeAddress"
                    value={formData.homeAddress}
                    onChange={handleChange}
                    required
                    className="w-full border border-cvc-border bg-cvc-card-inner px-4 py-3 text-cvc-fg focus:border-patriotic-blue focus:outline-none"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-cvc-fg mb-2">
                    Spouse's Name (if married):
                  </label>
                  <input
                    type="text"
                    name="spouseName"
                    value={formData.spouseName}
                    onChange={handleChange}
                    className="w-full border border-cvc-border bg-cvc-card-inner px-4 py-3 text-cvc-fg focus:border-patriotic-blue focus:outline-none"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-cvc-fg mb-2">
                    City<span className="text-red-600">*</span>
                  </label>
                  <input
                    type="text"
                    name="city"
                    value={formData.city}
                    onChange={handleChange}
                    required
                    className="w-full border border-cvc-border bg-cvc-card-inner px-4 py-3 text-cvc-fg focus:border-patriotic-blue focus:outline-none"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-cvc-fg mb-2">
                    Home Phone Number<span className="text-red-600">*</span>
                  </label>
                  <input
                    type="tel"
                    name="homePhoneNumber"
                    value={formData.homePhoneNumber}
                    onChange={handleChange}
                    required
                    className="w-full border border-cvc-border bg-cvc-card-inner px-4 py-3 text-cvc-fg focus:border-patriotic-blue focus:outline-none"
                  />
                </div>
              </div>
            </div>

            {/* Contact Information Section */}
            <div className="rounded-lg border border-cvc-border bg-cvc-card p-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-semibold text-cvc-fg mb-2">
                    State<span className="text-red-600">*</span>
                  </label>
                  <input
                    type="text"
                    name="state"
                    value={formData.state}
                    onChange={handleChange}
                    required
                    className="w-full border border-cvc-border bg-cvc-card-inner px-4 py-3 text-cvc-fg focus:border-patriotic-blue focus:outline-none"
                    placeholder="AL"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-cvc-fg mb-2">
                    Cell Phone Number:
                  </label>
                  <input
                    type="tel"
                    name="cellPhoneNumber"
                    value={formData.cellPhoneNumber}
                    onChange={handleChange}
                    className="w-full border border-cvc-border bg-cvc-card-inner px-4 py-3 text-cvc-fg focus:border-patriotic-blue focus:outline-none"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-cvc-fg mb-2">
                    County<span className="text-red-600">*</span>
                  </label>
                  <input
                    type="text"
                    name="county"
                    value={formData.county}
                    onChange={handleChange}
                    required
                    className="w-full border border-cvc-border bg-cvc-card-inner px-4 py-3 text-cvc-fg focus:border-patriotic-blue focus:outline-none"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-cvc-fg mb-2">
                    Email Address<span className="text-red-600">*</span>
                  </label>
                  <input
                    type="email"
                    name="emailAddress"
                    value={formData.emailAddress}
                    onChange={handleChange}
                    required
                    className="w-full border border-cvc-border bg-cvc-card-inner px-4 py-3 text-cvc-fg focus:border-patriotic-blue focus:outline-none"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-cvc-fg mb-2">
                    Zipcode<span className="text-red-600">*</span>
                  </label>
                  <input
                    type="text"
                    name="zipcode"
                    value={formData.zipcode}
                    onChange={handleChange}
                    required
                    className="w-full border border-cvc-border bg-cvc-card-inner px-4 py-3 text-cvc-fg focus:border-patriotic-blue focus:outline-none"
                  />
                </div>

                <div>
                  <a href="#" className="text-red-600 hover:text-red-700 font-semibold">
                    Click Here to Add Children
                  </a>
                </div>
              </div>
            </div>

            {/* Employment Section */}
            <div className="rounded-lg border border-cvc-border bg-cvc-card p-8">
              <SectionTitle title="Employment" size="subsection" align="left" className="mb-6" />
              
              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-semibold text-cvc-fg mb-2">
                    Desired Career:
                  </label>
                  <input
                    type="text"
                    name="desiredCareer"
                    value={formData.desiredCareer}
                    onChange={handleChange}
                    className="w-full border border-cvc-border bg-cvc-card-inner px-4 py-3 text-cvc-fg focus:border-patriotic-blue focus:outline-none"
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-semibold text-cvc-fg mb-3">
                      Full Time<span className="text-red-600">*</span>
                    </label>
                    <div className="space-y-2">
                      {['Yes', 'No'].map((option) => (
                        <label key={option} className="flex items-center space-x-3 cursor-pointer">
                          <input
                            type="radio"
                            name="fullTime"
                            value={option}
                            checked={formData.fullTime === option}
                            onChange={handleRadioChange}
                            required
                            className="h-5 w-5 text-patriotic-blue"
                          />
                          <span className="text-cvc-fg-muted">{option}</span>
                        </label>
                      ))}
                    </div>
                    {formData.fullTime === 'No' && (
                      <div className="mt-3">
                        <label className="block text-sm font-semibold text-cvc-fg mb-2">
                          If no then please specify how many hours per week:
                        </label>
                        <input
                          type="text"
                          name="hoursPerWeek"
                          value={formData.hoursPerWeek}
                          onChange={handleChange}
                          className="w-full border border-cvc-border bg-cvc-card-inner px-4 py-3 text-cvc-fg focus:border-patriotic-blue focus:outline-none"
                        />
                      </div>
                    )}
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-cvc-fg mb-3">
                      Post 9/11 GI Bill Benefits Available<span className="text-red-600">*</span>
                    </label>
                    <div className="space-y-2">
                      {['Yes', 'No'].map((option) => (
                        <label key={option} className="flex items-center space-x-3 cursor-pointer">
                          <input
                            type="radio"
                            name="post911GIBillAvailable"
                            value={option}
                            checked={formData.post911GIBillAvailable === option}
                            onChange={handleRadioChange}
                            required
                            className="h-5 w-5 text-patriotic-blue"
                          />
                          <span className="text-cvc-fg-muted">{option}</span>
                        </label>
                      ))}
                    </div>
                    {formData.post911GIBillAvailable === 'Yes' && (
                      <div className="mt-3">
                        <label className="block text-sm font-semibold text-cvc-fg mb-2">
                          If Yes, how many months:
                        </label>
                        <input
                          type="text"
                          name="giBillMonths"
                          value={formData.giBillMonths}
                          onChange={handleChange}
                          className="w-full border border-cvc-border bg-cvc-card-inner px-4 py-3 text-cvc-fg focus:border-patriotic-blue focus:outline-none"
                        />
                      </div>
                    )}
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-cvc-fg mb-2">
                    Current Position:
                  </label>
                  <input
                    type="text"
                    name="currentPosition"
                    value={formData.currentPosition}
                    onChange={handleChange}
                    className="w-full border border-cvc-border bg-cvc-card-inner px-4 py-3 text-cvc-fg focus:border-patriotic-blue focus:outline-none"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-cvc-fg mb-2">
                    Current Employer:
                  </label>
                  <input
                    type="text"
                    name="currentEmployer"
                    value={formData.currentEmployer}
                    onChange={handleChange}
                    className="w-full border border-cvc-border bg-cvc-card-inner px-4 py-3 text-cvc-fg focus:border-patriotic-blue focus:outline-none"
                  />
                </div>
              </div>
            </div>

            {/* Education Section */}
            <div className="rounded-lg border border-cvc-border bg-cvc-card p-8">
              <SectionTitle title="Education" size="subsection" align="left" className="mb-6" />
              
              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-semibold text-cvc-fg mb-2">
                    Certifications / Licenses Held:
                  </label>
                  <input
                    type="text"
                    name="certificationsLicenses"
                    value={formData.certificationsLicenses}
                    onChange={handleChange}
                    className="w-full border border-cvc-border bg-cvc-card-inner px-4 py-3 text-cvc-fg focus:border-patriotic-blue focus:outline-none"
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-semibold text-cvc-fg mb-3">
                      Vocational Rehab<span className="text-red-600">*</span>
                    </label>
                    <div className="space-y-2">
                      {['Yes', 'No'].map((option) => (
                        <label key={option} className="flex items-center space-x-3 cursor-pointer">
                          <input
                            type="radio"
                            name="vocationalRehab"
                            value={option}
                            checked={formData.vocationalRehab === option}
                            onChange={handleRadioChange}
                            required
                            className="h-5 w-5 text-patriotic-blue"
                          />
                          <span className="text-cvc-fg-muted">{option}</span>
                        </label>
                      ))}
                    </div>
                    {formData.vocationalRehab === 'Yes' && (
                      <div className="mt-3">
                        <label className="block text-sm font-semibold text-cvc-fg mb-2">
                          If Yes, name of school:
                        </label>
                        <input
                          type="text"
                          name="vocationalRehabSchool"
                          value={formData.vocationalRehabSchool}
                          onChange={handleChange}
                          className="w-full border border-cvc-border bg-cvc-card-inner px-4 py-3 text-cvc-fg focus:border-patriotic-blue focus:outline-none"
                        />
                      </div>
                    )}
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-cvc-fg mb-3">
                      Are you currently enrolled in school?<span className="text-red-600">*</span>
                    </label>
                    <div className="space-y-2">
                      {['Yes', 'No'].map((option) => (
                        <label key={option} className="flex items-center space-x-3 cursor-pointer">
                          <input
                            type="radio"
                            name="currentlyEnrolledInSchool"
                            value={option}
                            checked={formData.currentlyEnrolledInSchool === option}
                            onChange={handleRadioChange}
                            required
                            className="h-5 w-5 text-patriotic-blue"
                          />
                          <span className="text-cvc-fg-muted">{option}</span>
                        </label>
                      ))}
                    </div>
                    {formData.currentlyEnrolledInSchool === 'Yes' && (
                      <div className="mt-3 space-y-3">
                        <div>
                          <label className="block text-sm font-semibold text-cvc-fg mb-2">
                            If Yes, name of school:
                          </label>
                          <input
                            type="text"
                            name="schoolName"
                            value={formData.schoolName}
                            onChange={handleChange}
                            className="w-full border border-cvc-border bg-cvc-card-inner px-4 py-3 text-cvc-fg focus:border-patriotic-blue focus:outline-none"
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-semibold text-cvc-fg mb-2">
                            Course of study:
                          </label>
                          <input
                            type="text"
                            name="courseOfStudy"
                            value={formData.courseOfStudy}
                            onChange={handleChange}
                            className="w-full border border-cvc-border bg-cvc-card-inner px-4 py-3 text-cvc-fg focus:border-patriotic-blue focus:outline-none"
                          />
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>

            {/* Emergency Contact Information Section */}
            <div className="rounded-lg border border-cvc-border bg-cvc-card p-8">
              <SectionTitle title="Emergency Contact Information" size="subsection" align="left" className="mb-6" />
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-semibold text-cvc-fg mb-2">
                    Emergency Contact Name<span className="text-red-600">*</span>
                  </label>
                  <input
                    type="text"
                    name="emergencyContactName"
                    value={formData.emergencyContactName}
                    onChange={handleChange}
                    required
                    className="w-full border border-cvc-border bg-cvc-card-inner px-4 py-3 text-cvc-fg focus:border-patriotic-blue focus:outline-none"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-cvc-fg mb-2">
                    Emergency Contact Email<span className="text-red-600">*</span>
                  </label>
                  <input
                    type="email"
                    name="emergencyContactEmail"
                    value={formData.emergencyContactEmail}
                    onChange={handleChange}
                    required
                    className="w-full border border-cvc-border bg-cvc-card-inner px-4 py-3 text-cvc-fg focus:border-patriotic-blue focus:outline-none"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-cvc-fg mb-2">
                    Emergency Contact Address<span className="text-red-600">*</span>
                  </label>
                  <input
                    type="text"
                    name="emergencyContactAddress"
                    value={formData.emergencyContactAddress}
                    onChange={handleChange}
                    required
                    className="w-full border border-cvc-border bg-cvc-card-inner px-4 py-3 text-cvc-fg focus:border-patriotic-blue focus:outline-none"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-cvc-fg mb-2">
                    Emergency Contact Home Phone<span className="text-red-600">*</span>
                  </label>
                  <input
                    type="tel"
                    name="emergencyContactHomePhone"
                    value={formData.emergencyContactHomePhone}
                    onChange={handleChange}
                    required
                    className="w-full border border-cvc-border bg-cvc-card-inner px-4 py-3 text-cvc-fg focus:border-patriotic-blue focus:outline-none"
                  />
                </div>
              </div>
            </div>

            {/* Acknowledgements Section */}
            <div className="rounded-lg border border-cvc-border bg-cvc-card p-8">
              <div className="space-y-6">
                <div>
                  <p className="text-cvc-fg-muted mb-4">
                    By checking the following box, you acknowledge completion and understanding of each step and process by which shall operate.
                  </p>
                  <label className="flex items-center space-x-3 cursor-pointer">
                    <input
                      type="checkbox"
                      name="acknowledgementComplete"
                      checked={formData.acknowledgementComplete}
                      onChange={handleChange}
                      className="h-5 w-5 rounded border-cvc-border text-patriotic-blue"
                    />
                    <span className="text-cvc-fg-muted">Yes, I acknowledge</span>
                  </label>
                  <label className="flex items-center space-x-3 cursor-pointer mt-2">
                    <input
                      type="checkbox"
                      name="acknowledgementPost911"
                      checked={formData.acknowledgementPost911}
                      onChange={handleChange}
                      className="h-5 w-5 rounded border-cvc-border text-patriotic-blue"
                    />
                    <span className="text-cvc-fg-muted">I served in post-9/11 Iraq or Afghanistan.</span>
                  </label>
                </div>

                <div className="border-t border-cvc-border pt-6">
                  <p className="text-cvc-fg-muted mb-4">
                    By checking the following box, you agree to use your E-signature in place of a physical signature, and that your E-signature will stand as your legal signature in any and all respects of the law.*
                  </p>
                  <label className="flex items-center space-x-3 cursor-pointer">
                    <input
                      type="checkbox"
                      name="eSignatureAgreement"
                      checked={formData.eSignatureAgreement}
                      onChange={handleChange}
                      className="h-5 w-5 rounded border-cvc-border text-patriotic-blue"
                    />
                    <span className="text-cvc-fg-muted">I agree to use my E-signature</span>
                  </label>
                </div>
              </div>
            </div>

            {/* Additional Documents Section */}
            <div className="rounded-lg border border-cvc-border bg-cvc-card p-8">
              <SectionTitle
                title="*Additional Documents (Total documents cannot exceed more than 24MB)"
                size="subsection"
                align="left"
                uppercaseTitle={false}
                titleClassName="!text-red-600 dark:!text-red-500"
                className="mb-4"
              />
              
              <div className="space-y-4 mb-6">
                <div>
                  <label className="block text-sm font-semibold text-red-600 mb-2">
                    *DD214
                  </label>
                  <input
                    type="file"
                    name="dd214"
                    onChange={handleFileChange}
                    required
                    className="w-full border border-cvc-border bg-cvc-card-inner px-4 py-2 text-cvc-fg file:mr-4 file:rounded file:border-0 file:bg-cvc-hover file:px-3 file:py-1.5 file:text-sm file:font-medium file:text-cvc-fg focus:border-patriotic-blue focus:outline-none"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-red-600 mb-2">
                    VA Ratings Breakdown
                  </label>
                  <input
                    type="file"
                    name="vaRatingsBreakdown"
                    onChange={handleFileChange}
                    className="w-full border border-cvc-border bg-cvc-card-inner px-4 py-2 text-cvc-fg file:mr-4 file:rounded file:border-0 file:bg-cvc-hover file:px-3 file:py-1.5 file:text-sm file:font-medium file:text-cvc-fg focus:border-patriotic-blue focus:outline-none"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-red-600 mb-2">
                    *Picture ID
                  </label>
                  <input
                    type="file"
                    name="pictureID"
                    onChange={handleFileChange}
                    required
                    className="w-full border border-cvc-border bg-cvc-card-inner px-4 py-2 text-cvc-fg file:mr-4 file:rounded file:border-0 file:bg-cvc-hover file:px-3 file:py-1.5 file:text-sm file:font-medium file:text-cvc-fg focus:border-patriotic-blue focus:outline-none"
                  />
                </div>
              </div>

              <div className="border-t border-cvc-border pt-6">
                <SectionTitle
                  as="h3"
                  title="*VERY IMPORTANT OPSEC Guidelines:"
                  size="subsection"
                  align="left"
                  showBottomRule={false}
                  uppercaseTitle={false}
                  titleClassName="!text-lg !text-red-600 dark:!text-red-500"
                  className="mb-4"
                />
                <p className="text-red-600 mb-6">
                  When creating your biography, please remember to ensure the safety of others overseas and/or still in combat. This is stating the obvious, however, please do not give details concerning the camp where you were stationed, specific routes taken, unit size, procedures, etc. This information may be published world-wide, so please proceed with the obvious measures of precaution and adhere to the military uniformity within OPSEC guidelines.
                </p>

                <SectionTitle
                  as="h3"
                  title="In order for us to process your application, we will need the following documents:"
                  size="subsection"
                  align="left"
                  showBottomRule={false}
                  uppercaseTitle={false}
                  titleClassName="!text-lg !font-bold !normal-case"
                  className="mb-4"
                />

                <div className="space-y-4">
                  <div>
                    <SectionTitle
                      as="h4"
                      title="DD214:"
                      size="subsection"
                      align="left"
                      showBottomRule={false}
                      uppercaseTitle={false}
                      titleClassName="!mb-2 !text-base !font-bold"
                      className="!mb-0"
                    />
                    <p className="text-cvc-fg-muted">
                      This is documents you have received from the Department of Defense or the Veterans Administration. If you have been discharged from service please provide your DD214 that shows category of discharge as well. If you are still on active duty, a scanned copy of your Military ID will suffice.
                    </p>
                  </div>

                  <div>
                    <SectionTitle
                      as="h4"
                      title="VA Ratings Breakdown:"
                      size="subsection"
                      align="left"
                      showBottomRule={false}
                      uppercaseTitle={false}
                      titleClassName="!mb-2 !text-base !font-bold"
                      className="!mb-0"
                    />
                    <p className="text-cvc-fg-muted">
                      Your disability rating should be broken down by category of service connected injuries. Not simply a page that shows what your overall rating is. We need to know what your rating(s) is/are in order to best determine how to assist.
                    </p>
                  </div>

                  <div>
                    <SectionTitle
                      as="h4"
                      title="Picture ID:"
                      size="subsection"
                      align="left"
                      showBottomRule={false}
                      uppercaseTitle={false}
                      titleClassName="!mb-2 !text-base !font-bold"
                      className="!mb-0"
                    />
                    <p className="text-cvc-fg-muted">
                      This can be either a copy of your Military ID, Driver's License, VA Card, Etc.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* E-Signature Section */}
            <div className="rounded-lg border border-cvc-border bg-cvc-card p-8">
              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-semibold text-cvc-fg mb-2">
                    E-Signature<span className="text-red-600">*</span>
                  </label>
                  <input
                    type="text"
                    name="eSignature"
                    value={formData.eSignature}
                    onChange={handleChange}
                    required
                    className="w-full border border-cvc-border bg-cvc-card-inner px-4 py-3 text-cvc-fg focus:border-patriotic-blue focus:outline-none"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-cvc-fg mb-2">
                    Date<span className="text-red-600">*</span>
                  </label>
                  <input
                    type="text"
                    name="date"
                    value={formData.date}
                    onChange={handleChange}
                    required
                    className="w-full border border-cvc-border bg-cvc-card-inner px-4 py-3 text-cvc-fg focus:border-patriotic-blue focus:outline-none"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-cvc-fg mb-2">
                    Security Answer - Please Verify<span className="text-red-600">*</span>
                  </label>
                  <p className="text-cvc-fg-muted mb-2">2+3=?</p>
                  <input
                    type="text"
                    name="securityAnswer"
                    value={formData.securityAnswer}
                    onChange={handleChange}
                    required
                    className="w-full border border-cvc-border bg-cvc-card-inner px-4 py-3 text-cvc-fg focus:border-patriotic-blue focus:outline-none"
                  />
                </div>

                <button
                  type="submit"
                  className="rounded-lg bg-patriotic-blue px-8 py-4 text-lg font-semibold text-white shadow-lg transition-colors hover:bg-patriotic-navy"
                >
                  SEND
                </button>
              </div>
            </div>

            {/* Final Information Section */}
            <div className="rounded-lg border border-cvc-border bg-cvc-card p-8">
              <div className="space-y-6">
                <p className="font-bold text-cvc-fg">
                  Please provide us with accurate information about yourself so that we can get the assistance you requested to you as soon as possible!
                </p>

                <p className="font-bold text-cvc-fg">
                  As with all documents of a secure nature, please mark out your social security number, driver's license number, etc.
                </p>

                <p className="font-bold text-red-600">
                  WARNING: If you do not provide us with your complete documentation as requested, we will not be able to accept your application!
                </p>

                <div className="border-t border-cvc-border pt-6">
                  <p className="italic text-cvc-fg-muted mb-2">
                    <span className="font-semibold">Privacy Note:</span> Combat Veterans to Careers may use your contact information to send you updates about our programs and services. We do not share your information with third parties.
                  </p>
                </div>

                <div className="border-t border-cvc-border pt-6">
                  <SectionTitle title="More Information" size="subsection" align="left" className="mb-4" />
                  <ul className="space-y-2">
                    <li>
                      <a href="/mission" className="font-medium text-sky-600 underline hover:text-sky-500 dark:text-sky-400 dark:hover:text-sky-300">
                        For more details check out our MISSION page
                      </a>
                    </li>
                    <li>
                      <a href="/success-stories" className="font-medium text-sky-600 underline hover:text-sky-500 dark:text-sky-400 dark:hover:text-sky-300">
                        View our SUCCESS STORIES
                      </a>
                    </li>
                  </ul>
                </div>

                <div className="border-t border-cvc-border pt-6">
                  <SectionTitle title="Helpful Forms" size="subsection" align="left" className="mb-4" />
                  <ul className="space-y-2">
                    <li>
                      <a href="#" className="font-medium text-sky-600 underline hover:text-sky-500 dark:text-sky-400 dark:hover:text-sky-300">
                        Disclosure and Authorization Form
                      </a>
                    </li>
                    <li>
                      <a href="#" className="font-medium text-sky-600 underline hover:text-sky-500 dark:text-sky-400 dark:hover:text-sky-300">
                        VHA Medical Release Form
                      </a>
                    </li>
                    <li>
                      <a href="#" className="font-medium text-sky-600 underline hover:text-sky-500 dark:text-sky-400 dark:hover:text-sky-300">
                        Appointment of Veterans Service Organization as Claimants Representative
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </form>
        </div>
      </section>
    </main>
  )
}
